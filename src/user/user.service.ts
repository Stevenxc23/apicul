import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });;
  }
  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOneBy({id});
    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    await this.usersRepository.update(id, updateUserDto);
    return this.usersRepository.findOneBy({id});
  }
  async remove(id: number) {
    const user = await this.usersRepository.findOneBy({id});
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    await this.usersRepository.delete(id);
    return user; // Opcional: Devolver el usuario eliminado si se desea
  }
}
