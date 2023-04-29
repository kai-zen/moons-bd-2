import PageLayout from "../components/PageLayout";

const message =
  "تو معمای درخت دانا رو حل کردی! اون برای کمک به تو جای قارچ های جادویی جزیره رو بهت گفته و میتونی توی کوله پشتیت اونارو ببینی! شاید بعدا بدردت خورد";

const TheMushroom = ({ level }) => {
  return <PageLayout message={message} currentLevel={level} level={4} />;
};

export default TheMushroom;
