import PageLayout from "../components/PageLayout";

const message =
  "تو گرگ بزرگ روح خبیث رو جادو کردی! ارواح جزیره خیلی تعجب کردن!!";

const WolfRider = ({ level }) => {
  return <PageLayout message={message} currentLevel={level} level={8} />;
};

export default WolfRider;
