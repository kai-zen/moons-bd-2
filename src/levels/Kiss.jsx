import PageLayout from "../components/PageLayout";

const message =
  "حالا که رسیدی به کلبه جادوگر میتونی با بوسیدن طلسم قورباغه شدن علی رو خنثی کنی!!";

const Kiss = ({ level }) => {
  return <PageLayout message={message} currentLevel={level} level={11} />;
};

export default Kiss;
