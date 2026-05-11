import Error from "@/components/ErrorMessage";

const NotFound = () => {
  return (
    <div>
      <div className="hidden md:block">
        <Error toptext="Error 404" bottext="This page does not exist" />
      </div>
      <div className="md:hidden">
        <Error toptext="404" bottext="Page Not Found" />
      </div>
    </div>
  );
};

export default NotFound;
