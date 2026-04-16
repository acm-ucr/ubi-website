import Error from "@/components/ErrorMessage";

const NotFound = () => {
  return (
    <div>
      <Error toptext="Error 404" bottext="This page does not exist" />
    </div>
  );
};

export default NotFound;
