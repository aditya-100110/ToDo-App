import { Carousel } from "@material-tailwind/react";
const CarouselSection=()=>{
    return(
        <div className="h-64 border border-black rounded-md">
        <Carousel className="rounded-xl">
      
      <img
      src="https://media.istockphoto.com/id/929777060/photo/motivational-quote-you-can-not-change-the-wind-but-you-can-adjust-your-sails-appearing-behind.jpg?s=612x612&w=0&k=20&c=bETds2zIVftpZxk0EsxmLG6EPfh474bt1rwDppkVuBU="
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoLqQVBQo4vsWJTrtRoBL61h7CxHok9bi4qQ&s"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      
      <img
      src="https://media.istockphoto.com/id/1254988462/photo/everyone-wants-to-be-successful-motivational-quote.jpg?s=612x612&w=0&k=20&c=OjtpDCLYblsyZC_bl4Zs1GWftb3R2vC5x2_k-bXFSDo="
      alt="image 4"
      className="h-full w-full object-cover"
      />
    </Carousel></div>
  )
    
}
 export default CarouselSection;