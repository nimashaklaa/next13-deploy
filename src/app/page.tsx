import HomeBanner from "@/app/components/HomeBanner";
import Container from "@/app/components/Container";
import {products} from "@/app/utils/products";
import {TruncateText} from "@/app/utils/TruncateText";
import {ProductCard} from "@/app/components/products/ProductCard";


export default function Home() {
  return (
      <div className="p-8">
          <Container>
              <div>
                  <HomeBanner/>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-12">
                  {products.map((product:any) => {
                      return (<ProductCard data={product}/>)
                  })}
              </div>
          </Container>
      </div>
  )
}
