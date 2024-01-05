import HomeBanner from "@/app/components/HomeBanner";
import Container from "@/app/components/Container";
import {products} from "@/app/utils/products";
import {TruncateText} from "@/app/utils/TruncateText";


export default function Home() {
  return (
      <div className="p-8">
          <Container>
              <div>
                  <HomeBanner/>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                  {products.map((product:any) => {
                      return (<div>{TruncateText( product.name)}</div>)
                  })}
              </div>
          </Container>
      </div>
  )
}
