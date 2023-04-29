import PageLayout from "../components/PageLayout";

const message =
  "ماه بی همتا توی قسمت قبل تمام  مراحل رو رد کرد و علی خنگ خودش رو که توی جزیره سلنوفیلیا گم شده بود پیدا کرد تا با همدیگه زندگی آرومی رو سپری کنن";

const Summary = ({ level }) => {
  return <PageLayout message={message} currentLevel={level} level={0} />;
};

export default Summary;
