import PageLayout from "../components/PageLayout";

const message = "بالاخره بعد از اون مسیر طولانی به کلبه رسیدی!";

const TheCottage = ({ level }) => {
  return <PageLayout message={message} currentLevel={level} level={10} />;
};

export default TheCottage;
