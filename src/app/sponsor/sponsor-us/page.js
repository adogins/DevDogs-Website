import DirectMessageForm from "../../components/DirectMessageForm";
import PageTitleTemplate from "../../components/PageTitleTemplate";
import SocialsAndContact from "../../components/SocialsAndContact";

const Page = () => {
  return (
    <div className="w-full section flex flex-col h-[100vh] page-main-side-padding">
      <PageTitleTemplate redText={"Sponsor "} blackText={"Us"} />
      <SocialsAndContact />
      <DirectMessageForm />
    </div>
  );
};

export default Page;
