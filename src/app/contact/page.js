import DirectMessageForm from "../components/DirectMessageForm";
import PageTitleTemplate from "../components/PageTitleTemplate";
import SocialsAndContact from "../components/SocialsAndContact";

const Page = () => {
  return (
    <div className="w-full section page-main-side-padding">
      <PageTitleTemplate redText={"Contact "} blackText={"Us"} />
      <SocialsAndContact />
      <DirectMessageForm />
    </div>
  );
};

export default Page;
