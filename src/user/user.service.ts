import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { UserEntity } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private dataSource: DataSource) {}

  async findOne(id: number) {
    try {
      const userFind = await this.dataSource
      .getRepository(UserEntity)
        .findOne({
          where: { id: id },
          relations: ['role'],
          select: ['id', 'email', 'name', 'role'],
        });
      if (!userFind) {
        return new HttpException(
          'No se encontro el usuario',
          HttpStatus.NOT_FOUND,
        );
      }
      return userFind;
    } catch (error) {
      throw new HttpException(
        'Error al obtener el usuario',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    try {
    const userss = await this.dataSource
        .getRepository(UserEntity)
        .find({
        relations: ['role'],
        select: ['id', 'email', 'name'],
        });
    if (!userss) {
        return new HttpException(
        'No se encontraron usuarios',
        HttpStatus.NOT_FOUND,
        );
    }

    return userss;
    } catch (error) {
    throw new HttpException(
        'Error al obtener los usuarios',
        HttpStatus.INTERNAL_SERVER_ERROR,
    );
    }
}

  async create(createUserDto: CreateUserDto) {
    try {
      const newUser = this.dataSource
      .getRepository(UserEntity).create(createUserDto);

      const encryptedPassword = await this.encryptPassword(
        createUserDto.password,
      );
      newUser.password = encryptedPassword;

      await this.dataSource
      .getRepository(UserEntity).save(newUser);
      const response = {
        statusCode: HttpStatus.OK,
        data: [newUser],
        rol: newUser.role
      };
      return response;
    } catch (error) {
      throw new Error('Error al crear el usuario: ' + error.message);
    }
  }

  async encryptPassword(password: string): Promise<string> {
    const bcrypt = require('bcrypt');
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  }

  async loginUser(email: string, password: string) {
    try {
      const userFind = await this.dataSource
      .getRepository(UserEntity).findOne({
        where: { email: email },
        relations: ['role'],
        select: ['id', 'email', 'name', 'password'],
      });

      if (!userFind) {
        throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
      }

      const bcrypt = require('bcrypt');
      const isPasswordValid = await bcrypt.compare(
        password,
        userFind.password,
      );

      if (!isPasswordValid) {
        throw new HttpException(
          'Contraseña incorrecta',
          HttpStatus.UNAUTHORIZED,
        );
      }

      // Si la contraseña es válida, devolver la información completa del usuario
      return {
        id: userFind.id,
        nombre: userFind.name,
        email: userFind.email,
        role: userFind.role
      };
    } catch (error) {
      throw new HttpException(
        'Error al iniciar sesión',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: number) {
    try {
    const userFind = await this.dataSource
        .getRepository(UserEntity)
        .findOne({ where: { id: id } });
    if (!userFind) {
        return new HttpException(
        'No se encontro el usuario',
        HttpStatus.NOT_FOUND,
        );
    }
    return await this.dataSource
        .getRepository(UserEntity)
        .remove(userFind);
    } catch (error) {
    throw new HttpException(
        'Error al eliminar el usuario',
        HttpStatus.INTERNAL_SERVER_ERROR,
    );
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
    const userFind = await this.dataSource
        .getRepository(UserEntity)
        .findOne({ where: { id: id } });
    if (!userFind) {
        return new HttpException(
        'No se encontro el usuario',
        HttpStatus.NOT_FOUND,
        );
    }
    return await this.dataSource
        .getRepository(UserEntity)
        .update({ id: userFind.id }, updateUserDto);
    } catch (error) {
    throw new HttpException(
        'Error al actualizar el usuario',
        HttpStatus.INTERNAL_SERVER_ERROR,
    );
    }
}

  // private generateJwtToken(userId: number, email: string): string {
  //   const payload = { sub: userId, email };
  //   return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  // }
}
