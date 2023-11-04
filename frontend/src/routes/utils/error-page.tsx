export default function ErrorPage() {
  return (
    <div className="flex w-full min-h-screen justify-center items-center bg-gray-100">
      <div className="-mt-40 w-full sm:max-w-md px-6 py-10 bg-white shadow-md overflow-hidden sm:rounded-lg text-center">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </div>
    </div>
  );
}