import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

/**
 * 유저에게 필요한 정보들
 * - 성 (last_name)
 * - 이름 (first_name)
 * - 닉네임 (unique)
 * - 이메일
 * - 연락처 (?)
 * - 비밀번호 (1차 MVP에는 소셜 로그인만 제공할 것이므로 필요 없을 수도 있음)
 */

@Entity({
  name: 'cinewise_user',
})
export class User {
  @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
  userId: string;

  @Column({
    name: 'first_name',
  })
  firstName: string;

  @Column({
    name: 'last_name',
  })
  lastName: string;

  @Column({
    unique: true,
  })
  nickname: string;

  @Column({
    unique: true,
  })
  email: string;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
  })
  createdAt: Date;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
  })
  updatedAt: Date;
}
