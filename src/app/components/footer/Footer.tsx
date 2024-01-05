import Container from "../Container"
import FooterList from "@/app/components/footer/FooterList";
import Link from "next/link";
import {MdFacebook} from "react-icons/md";
import {AiFillInstagram, AiFillTwitterCircle, AiFillYoutube} from "react-icons/ai";
const Footer = () =>{
    return(
        <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
            <Container>
                <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                    <FooterList>
                        <h3 className="text-base font-bold">Shop Categories</h3>
                        <Link href="#">Men&apos; Clothing</Link>
                        <Link href="#">Women&apos; Clothing</Link>
                        <Link href="#">Kids Wares</Link>
                        <Link href="#">Accessories</Link>
                    </FooterList>
                    <FooterList>
                        <h3 className="text-base font-bold">Customer Service</h3>
                        <Link href="#">Contact Us</Link>
                        <Link href="#">Shopping Policy</Link>
                        <Link href="#">Return & Exchanges</Link>
                        <Link href="#">FAQs</Link>
                    </FooterList>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-base font-bold mb-2">About Us</h3>
                        <p className="mb-2"> At Shopping Center, we curate timeless fashion pieces for the modern individual. Our collection combines comfort with elegance, offering versatile styles that effortlessly elevate your everyday look. Discover fashion that speaks to you at the Shopping Center.</p>
                        <p>&copy; {new Date().getFullYear()} The Shopping Center. All Rights reserved</p>
                    </div>
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Follow Us</h3>
                        <div className="flex gap-2">
                            <Link href="#"><MdFacebook size={24}/></Link>
                            <Link href="#"><AiFillTwitterCircle size={24}/></Link>
                            <Link href="#"><AiFillInstagram size={24}/></Link>
                            <Link href="#"><AiFillYoutube size={24}/></Link>

                        </div>

                    </FooterList>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;