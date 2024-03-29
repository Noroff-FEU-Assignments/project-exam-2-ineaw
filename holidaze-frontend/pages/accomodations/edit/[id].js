import Layout from "@/components/layout/index";
import { API_URL } from "../../../lib";
import PageHead from "@/components/layout/PageHead";
import qs from "qs";
import EditForm from "../../../components/admin/edit";
import { useFetchUser } from "@/context/authContext";

export default function Edit({ accomodation }) {
  const { user, loading } = useFetchUser();
  return (
    <>
      <Layout user={user}>
        <PageHead title={accomodation.name} />
        <EditForm accomodation={accomodation} />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const query = qs.stringify(
    {
      populate: "image",
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await fetch(`${API_URL}/api/accomodations/${id}?${query}`);
  const accomodation = await res.json();

  return {
    props: { accomodation },
  };
}
