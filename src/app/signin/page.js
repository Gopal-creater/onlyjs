import SignInForm from "./components/SignInForm/signInForm";

export const metadata = {
  title: "onlyjs signin",
};

export default async function Page() {
  return (
    <div className="absolute h-full w-full flex flex-col justify-center items-center">
      <h2 className="text-center scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        SignIn
      </h2>
      <div className="w-full max-w-md p-6">
        <SignInForm />
      </div>
    </div>
  );
}
