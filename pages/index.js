import Head from "next/head";
import { Container } from "react-bootstrap";
import Header from "../components/header";
import SectionContainer from "../components/sectionContainer";
 

const sectionData = [
  {
    id: 1,
    name: "HealthCare",
    title: "CULTURE & LIVING",
    desc:
      "Eve Ensler's book reading in Mumbai helps put focus on the violence against women in the country Eve Ensler's book reading in Mumbai helps put focus on the violence against women in the country   ",
    theme: "#fed362",
    childPosts: [
      {
        id: 1,
        title: "Zorains Studio",
        subTitle: "CULTURE & LIVING",
        author: "Admin",
        img: "http://dev.evantiv.com/vogue_wp/wp-content/uploads/2019/11/hair-care-hairstyling-products.jpg",
        type: "fullWidth"
      },
      {
        id: 2,
        title: "Zorains Studio",
        subTitle: "CULTURE & LIVING",
        author: "Admin",
        img:
          "http://dev.evantiv.com/vogue_wp/wp-content/uploads/2019/11/DIANA-PENTY-FEATURED.jpg",
        type: "oneFourth"
      },
      {
        id: 2,
        title: "Zorains Studio",
        subTitle: "CULTURE & LIVING",
        author: "Admin",
        img:
          "http://dev.evantiv.com/vogue_wp/wp-content/uploads/2019/11/Mira-Rajput-Kapoor.jpg",
        type: "oneFourth"
      }
    ]
  },
  {
    id: 2,
    name: "HealthCare",
    title: "CULTURE & LIVING",
    desc:
      "Eve Ensler's book reading in Mumbai helps put focus on the violence against women in the country Eve Ensler's book reading in Mumbai helps put focus on the violence against women in the country   ",
    theme: "#f37777",
    childPosts: [
      {
        id: 1,
        title: "Zorains Studio",
        subTitle: "CULTURE & LIVING",
        author: "Admin",
        img:
          "http://dev.evantiv.com/vogue_wp/wp-content/uploads/2019/11/f.jpg",
        type: "fullWidth"
      },
      {
        id: 2,
        title: "Zorains Studio",
        subTitle: "CULTURE & LIVING",
        author: "Admin",
        img:
          "http://dev.evantiv.com/vogue_wp/wp-content/uploads/2019/11/Alia-Bhatt-wearing-Anita-Dongre.jpg",
        type: "oneFourth"
      },
      {
        id: 2,
        title: "Zorains Studio",
        subTitle: "CULTURE & LIVING",
        author: "Admin",
        img:
          "http://dev.evantiv.com/vogue_wp/wp-content/uploads/2019/11/IMG_3290-768x768.jpg",
        type: "oneFourth"
      }
    ]
  },
  {
    id: 3,
    name: "HealthCare",
    title: "CULTURE & LIVING",
    desc:
      "Eve Ensler's book reading in Mumbai helps put focus on the violence against women in the country Eve Ensler's book reading in Mumbai helps put focus on the violence against women in the country   ",
    theme: "#70c7e2",
    childPosts: [
      {
        id: 1,
        title: "Zorains Studio",
        subTitle: "CULTURE & LIVING",
        author: "Admin",
        img:
          "http://dev.evantiv.com/vogue_wp/wp-content/uploads/2019/11/Featured110-768x768.jpg",
        type: "fullWidth"
      },
      {
        id: 2,
        title: "Zorains Studio",
        subTitle: "CULTURE & LIVING",
        author: "Admin",
        img:
          "http://dev.evantiv.com/vogue_wp/wp-content/uploads/2019/11/schon-designer-image1-768x768.jpg",
        type: "oneFourth"
      },
      {
        id: 2,
        title: "Zorains Studio",
        subTitle: "CULTURE & LIVING",
        author: "Admin",
        img:
          "http://dev.evantiv.com/vogue_wp/wp-content/uploads/2019/11/Featured110-768x768.jpg",
        type: "oneFourth"
      }
    ]
  },
  {
    id: 4,
    name: "HealthCare",
    title: "CULTURE & LIVING",
    desc:
      "Eve Ensler's book reading in Mumbai helps put focus on the violence against women in the country Eve Ensler's book reading in Mumbai helps put focus on the violence against women in the country   ",
    theme: "#51466b",
    childPosts: [
      {
        id: 1,
        title: "Zorains Studio",
        subTitle: "CULTURE & LIVING",
        author: "Admin",
        img:
          "http://dev.evantiv.com/vogue_wp/wp-content/uploads/2019/11/Featured110-768x768.jpg",
        type: "fullWidth"
      },
      {
        id: 2,
        title: "Zorains Studio",
        subTitle: "CULTURE & LIVING",
        author: "Admin",
        img:
          "http://dev.evantiv.com/vogue_wp/wp-content/uploads/2019/11/schon-designer-image1-768x768.jpg",
        type: "oneFourth"
      },
      {
        id: 2,
        title: "Zorains Studio",
        subTitle: "CULTURE & LIVING",
        author: "Admin",
        img:
          "http://dev.evantiv.com/vogue_wp/wp-content/uploads/2019/11/Featured110-768x768.jpg",
        type: "oneFourth"
      }
    ]
  }
];

export default function Home() {
  return (
    <Container fluid={true} className={"p0"}>
      <Header />
      {sectionData.map(item => (
        <SectionContainer data={item} />
      ))}
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Container>
  );
}
