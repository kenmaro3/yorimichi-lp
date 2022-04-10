/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Vector from 'assets/key-feature/vector.svg';
import Editing from 'assets/key-feature/editing.svg';
import Speed from 'assets/key-feature/speed.svg';

const data = [
  {
    id: 1,
    imgSrc: Vector,
    altText: 'Vector',
    title: 'Map上でヨリミチを簡単検索',
    text:
      'ユーザの投稿したヨリミチは、Map上で検索可能。旅行先などの知らない場所でも、おすすめの場所を簡単検索。',
  },
  {
    id: 2,
    imgSrc: Editing,
    altText: 'Monitoring',
    title: '周辺の投稿、人気の投稿を探索',
    text:
      'どこかにヨリミチしたい、でもどこに行っていいのかわからない、そんな時にエクスプローラー機能を使い、周辺の投稿や人気の投稿をチェック。',
  },
  {
    id: 3,
    imgSrc: Speed,
    altText: 'Quality',
    title: '未知の場所を投稿可',
    text:
      'ここから見える夕日が綺麗だったから他の人にもおすすめしたい、そんなときにあなたの投稿と地図上の場所をピンポイントで紐つけましょう。',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="YorimichiAppで出来ること"
          title="エキサイティングな機能を使ってみよう"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    px: [0, null, null, '40px', null, '80px'],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ['35px 0', null, '40px 0'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
    },
  },
};
