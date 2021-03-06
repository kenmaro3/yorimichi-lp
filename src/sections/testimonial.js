/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Rating from 'components/rating';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';


const data = [
  {
    id: 0,
    title: '「YorimichiApp」 Androidバージョンを公式サポート開始',
    link: "https://pr-free.jp/2022/53109/",
    imgSrc: "https://pr-free.jp/wp-content/uploads/2022/04/20220417_1222yorimichi_feature_graphic.png",
    footerText: "公式プレスリリース"
  },
  {
    id: 1,
    title: '強化学習に学んだ人生観をiOSアプリに「YorimichiApp」',
    link: "https://note.com/yorimichi_app/n/nedebd9ab44b2",
    imgSrc: "https://uploads-ssl.webflow.com/61cea7888ae76f0a1433f687/61f557fa762e4ba4968d4501_note-p-800.jpeg",
    footerText: "Note@Kent"
  },
  {
    id: 2,
    title: '【プレスリリース】／「YorimichiApp」公式リリース',
    link: "https://pr-free.jp/2021/45712/",
    imgSrc: "https://pr-free.jp/wp-content/uploads/2021/11/20211124_1417top1.png",
    footerText: "公式プレスリリース"
  },
  {
    id: 3,
    title: 'インタビュー記事｜Digital Hack day 2021 レポート',
    link: "https://www.mapbox.jp/blog/digitalhackday-interview02",
    imgSrc: "https://uploads-ssl.webflow.com/61cea7888ae76f0a1433f687/61ceaa05f4dde030033daa97_fig1-p-800.png",
    footerText: "Mapbox Blog"
  },
  {
    id: 4,
    title: 'iOSアプリをリリースするまでの軌跡',
    link: "https://qiita.com/kenmaro/items/149417e96c82e6ebe541",
    imgSrc: "https://uploads-ssl.webflow.com/61cea7888ae76f0a1433f687/61ceac634d566db764ebcd5e_qiiiiita.png",
    footerText: "Qiita@kenmaro"
  },
  {
    id: 5,
    title: 'YAHOO! JAPAN Digital Hack Day 2021 参加レポート',
    link: "https://qiita.com/kenmaro/items/670ccb362e185e3cc3f4",
    imgSrc: "https://uploads-ssl.webflow.com/61cea7888ae76f0a1433f687/61ceac634d566db764ebcd5e_qiiiiita.png",
    footerText: "Qiita@kenmaro"
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function TestimonialCard() {
  return (
    <section id="news" sx={{ variant: 'section.testimonial' }}>
      <Container>
        <SectionHeader slogan="Our News" title="YorimichiApp に関連するニュース" />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          customButtonGroup={<ButtonGroup />}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
        >
          {data.map((item) => (
            <Box sx={styles.reviewCard} key={`testimonial--key${item.id}`}>
              {/* <Rating rating={item.review} /> */}
              <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                  src={item.imgSrc}
                  loading="lazy"
                  width="240"
                  alt="alt"
                />
              </a>
              <Heading as="h3" sx={styles.title}>
                {item.title}
              </Heading>
              <div className="card-footer">
                <div className="image">
                </div>
                <div className="reviewer-info">
                  <Heading as="h4" sx={styles.heading}>
                    {item.footerText}
                  </Heading>
                  <Text sx={styles.designation}>{item.designation}</Text>
                </div>
              </div>

            </Box>
          ))}
        </Carousel>
      </Box>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-35px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        'calc(50% + 865px)',
      ],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: [
      '30px 20px 35px',
      '30px 25px 35px',
      '30px 20px 35px',
      '35px 30px 40px 40px',
      '30px 30px 35px',
      '35px 30px 40px 40px',
    ],
    bg: 'white',
    textAlign: 'left',
    m: [
      '28px 5px 30px 5px',
      '28px 20px 30px 20px',
      '28px 15px 30px 15px',
      '28px 15px 30px 15px',
      '30px 20px 40px',
    ],
    '&:hover': {
      boxShadow: '0px 6px 47px rgba(38, 78, 118, 0.1)',
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex',
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0,
        },
      },
      '.star': {
        color: 'yellow',
        mr: '1px',
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px',
      },
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover',
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3,
  },
  designation: {
    color: '#25A0FF',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4,
  },
};
