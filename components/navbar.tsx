import Container from "@/components/ui/container";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";
import { Watch } from "lucide-react";


const Navbar = async () => {
    const categories= await getCategories();

    return ( 
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                        <Watch className="h-7 w-7" />
                        <span>
                            <p className="font-bold text-xl">JW Jewelers</p>
                        </span>  
                    </Link>
                    <MainNav data={categories} />
                    <NavbarActions />
                </div>
            </Container>
        </div>
     );
}
 
export default Navbar;