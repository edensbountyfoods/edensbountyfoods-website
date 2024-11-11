import HomeScreen from "@/components/screens/home/home";

const Home = ({ admin }) => {
  console.log(admin);

  return (
    <>
      <HomeScreen admin={admin} />
    </>
  );
};

export default Home;
