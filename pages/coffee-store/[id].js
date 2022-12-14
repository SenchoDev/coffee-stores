import Link from "next/link";
import { useRouter } from "next/router";

const CoffeeStore = (props) => {

  const router = useRouter();
  return (
    <div>
      Coffee Store Page {router.query.id}
      <Link href='/'><a>Back to home</a></Link>
      <Link href='/coffee-store/dynamic'><a>Go to page </a></Link>
    </div>
  );
};

export default CoffeeStore;