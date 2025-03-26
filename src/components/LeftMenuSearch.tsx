import { Search } from "./Search";

export function LeftMenuSearch() {
  const searchSubmit = async (data: FormData) => {
    "use server";
    console.log(data.get("search") as string);
  };

  return (
    <div className="mx-4 my-4">
      <Search
        action={searchSubmit}
        placeholder="Search..."
        label="Main menu search"
        showLabel={false}
        canKeyboardFocus={true}
      />
    </div>
  );
}
