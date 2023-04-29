import PageLayout from "../components/PageLayout";

const message =
  "بخاطر همین وقتی که شب شد و ماه و علی خوابیدن اومد و علی رو طلسم کرد و تبدیل به قورباغه کرد";

const TheFrog = ({ level }) => {
  return <PageLayout message={message} currentLevel={level} level={2} />;
};

export default TheFrog;
