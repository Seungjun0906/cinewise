import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { GenreContetType } from '../types';

@Entity()
export class Genre {
  @PrimaryGeneratedColumn({
    name: 'genre_id',
  })
  genreId: number;

  @Column({ name: 'genre_name' })
  name: string;

  @Column({ name: 'content_type', type: 'varchar' })
  contentType: GenreContetType;
}

/**
 * 장르가 영화인지 드라마인지 구분 그럼 확장될 여지가 있지는 않으니까 그냥 enum으로 처리해도 될 것 같음
 */
