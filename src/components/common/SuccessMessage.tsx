const SuccessMessage = ({ text }: { text?: string }) => {
  return (
    <div className="flex justify-center items-center text-emerald-500 font-semibold">
      {text ? text : "Success!"}
    </div>
  );
};

export default SuccessMessage;
