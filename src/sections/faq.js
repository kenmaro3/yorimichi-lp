/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'iOS v1.4.2 のリリース (Mar 20, 2022)',
    contents: (
      <div>
        - レイアウトの微修正等
      </div>
    ),
  },
  {
    title: 'iOS v1.4.1 のリリース (Mar 6, 2022)',
    contents: (
      <div>
      </div>
    ),
  },
  {
    title: 'iOS v1.4.0 のリリース (Feb 19, 2022)',
    contents: (
      <div>
        - プロモーション（特定の場所を宣伝する機構）を追加 <br/>

        - エクスプローラー画面から、プロモーション、最近の投稿、人気の投稿、周辺の投稿などを表示<br/>

        - 各投稿画面に「地図上で見る」ボタンを追加- コメントを廃止し、インフォに変更（メニュー、価格、時間を情報追加可能）<br/>

        - ホーム画面の「あなたへのオススメ」のロジックの強化<br/>

        - プロフィール画面に「自分のヨリミチ」、「いいねしたヨリミチ」をタブ表示<br/>

        - AdMobをマップ画面に追加- プッシュ通知の追加<br/>

        - アプリ立ち上げ時のお知らせ機能の追加<br/>

        - レイアウトの修正- その他細かなバグ修正
      </div>
    ),
  },
  {
    title: 'iOS v1.3.1 のリリース (Dec 30, 2021)',
    contents: (
      <div>
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section sx={{ variant: 'section.faq' }} id="release-info">
      <Container>
        <SectionHeader
          title="YorimichiApp のリリース履歴"
          slogan="Our Product Updates"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
