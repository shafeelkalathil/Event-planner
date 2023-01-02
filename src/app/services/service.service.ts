import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  data:any=[]
  constructor(private http:HttpClient) { }

  // category = [
  //   {
      
  //     categoryId:1,
  //     routeName:"catering",
  //     categoryName:"Catering",
  //     categoryImg:"https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0ZXJpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  //   },
  //   {
      
  //     categoryId:2,
  //     routeName:"photography",
  //     categoryName:"PhotoGraphy",
  //     categoryImg:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  //   },
  //   {
      
  //     categoryId:3,
  //     routeName:"travels",
  //     categoryName:"Travels",
  //     categoryImg:"https://media.istockphoto.com/id/1159637659/photo/young-black-woman-driving-car-for-rideshare.jpg?b=1&s=170667a&w=0&k=20&c=XFMVB64qmV8jl5kqv8ws2f3kBTCJJyljmpxCaHvaAJU="
  //   },
  //   {
      
  //     categoryId:4,
  //     routeName:"venue",
  //     categoryName:"Venue",
  //     categoryImg:"https://images.unsplash.com/photo-1505944357431-27579db47558?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2VkZGluZyUyMHZlbnVlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  //   },
  //   {
      
  //     categoryId:5,
  //     routeName:"cake",
  //     categoryName:"Cakes",
  //     categoryImg:"https://images.unsplash.com/photo-1525257831700-183b9b8bf5c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZyUyMGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  //   },
  //   {
      
  //     categoryId:6,
  //     routeName:"decaration",
  //     categoryName:"Decoration",
  //     categoryImg:"https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMGRlY29yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  //   },
   
   
  // ]
  // categoryItems=[
  //      {
  //       id:1,
  //       categoryId:1,
  //       companyName:"Eatwell",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://images.unsplash.com/photo-1616734755909-bb016ce64930?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZyUyMGNhdGVyaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  
  //      },
  //      {
  //       id:2,
  //       categoryId:1,
  //       companyName:"Taza",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://images.unsplash.com/photo-1522413452208-996ff3f3e740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2VkZGluZyUyMGNhdGVyaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  
  //      },
  //      {
  //       id:3,
  //       categoryId:1,
  //       companyName:"Treat Kitchen",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://images.unsplash.com/photo-1524777313293-86d2ab467344?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdlZGRpbmclMjBjYXRlcmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  
  //      },{
  //       id:4,
  //       categoryId:1,
  //       companyName:"SR Catering",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://images.unsplash.com/photo-1480455454781-1af590be2a58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlZGRpbmclMjBjYXRlcmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  
  //      },
  //      {
  //       id:5,
  //       categoryId:1,
  //       companyName:"Nallapass",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdlZGRpbmclMjBjYXRlcmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  
  //      },
  //      {
  //       id:6,
  //       categoryId:1,
  //       companyName:"Bismi",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://media.istockphoto.com/id/948568004/photo/waiter-serving-food-at-luxury-table-set-at-wedding-reception-catering-in-restaurant.jpg?b=1&s=170667a&w=0&k=20&c=atNIwqjAJ_z98zexilCPnyUmYeeQaQDFjZ_BdZof18M="
  
  //      },
       
  
      
  //     {
  //       id:7,
  //       categoryId:2,
  //       companyName:"Ambro",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  
  //     },{
  //       id:8,
  //       categoryId:2,
  //       companyName:"Wedd F",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://images.unsplash.com/photo-1554844453-7ea2a562a6c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  
  //     },{
  //       id:9,
  //       categoryId:2,
  //       companyName:"Capital",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  
  //     },{
  //       id:10,
  //       categoryId:2,
  //       companyName:"Cocunt",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://images.unsplash.com/photo-1554080353-321e452ccf19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  
  //     },{
  //       id:11,
  //       categoryId:2,
  //       companyName:"Baboos",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://images.unsplash.com/photo-1505739998589-00fc191ce01d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  
  //     },{
  //       id:12,
  //       categoryId:2,
  //       companyName:"Zaik",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://images.unsplash.com/photo-1486916856992-e4db22c8df33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  
  //     },
  //     {
  //       id:13,
  //       categoryId:3,
  //       companyName:"Global",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://media.istockphoto.com/id/1161578650/photo/unrecognizable-small-passenger-van-hurry-up-on-highway-at-city-street-traffic-with-urban.jpg?b=1&s=170667a&w=0&k=20&c=UjmGkC6PnxehHcVbKTkU7-qwchInFV4Cwt328VsYPa4="
  
  //     },{
  //       id:14,
  //       categoryId:3,
  //       companyName:"Presidency",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://media.istockphoto.com/id/1197014116/photo/travel-company-bus.jpg?b=1&s=170667a&w=0&k=20&c=GhAK2b5WXMhPiAu_P9xU3XOhqmez5XeFQl6homox5ME="
  
  //     },{
  //       id:15,
  //       categoryId:3,
  //       companyName:"Gai Guru",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://images.unsplash.com/photo-1478359900967-91ec0c6edc60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG9yaXN0JTIwYnVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  
  //     },{
  //       id:16,
  //       categoryId:3,
  //       companyName:"Rolex",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://media.istockphoto.com/id/1140615523/photo/boarding-coach.jpg?b=1&s=170667a&w=0&k=20&c=lWzWvpZNNCZjeXEUePST5UGIC_nGltCd4G2w3RccBbM="
  
  //     },{
  //       id:17,
  //       categoryId:3,
  //       companyName:"Oneness",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://media.istockphoto.com/id/1194876392/photo/tourist-bus-carries-tourists.jpg?b=1&s=170667a&w=0&k=20&c=fn8XfDRg21goh1sdnbNJPilQgZG8m57je9piv9foq_U="
  
  //     },{
  //       id:18,
  //       categoryId:3,
  //       companyName:"Jyothi",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://images.unsplash.com/photo-1577701517740-ad4aa1fc1000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dG9yaXN0JTIwYnVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  
  //     },{
  //       id:19,
  //       categoryId:4,
  //       companyName:"Shifa",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://media.istockphoto.com/id/1184628725/photo/3d-wedding-reception-background-illustration.jpg?b=1&s=170667a&w=0&k=20&c=z6mvGjK_vCn1_nxN5lmY3wuLOrMWywc6K-DBfzgxFuE="
  
  //     },{
  //       id:20,
  //       categoryId:4,
  //       companyName:"Celebration Time",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://media.istockphoto.com/id/175559502/photo/classy-wedding-setting.jpg?b=1&s=170667a&w=0&k=20&c=qdw6B1C5EhqdiNeeID7EBa2x7UukHIVabZFkz-JeqfA="
  
  //     },{
  //       id:21,
  //       categoryId:4,
  //       companyName:"Shaz",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://media.istockphoto.com/id/1190489970/photo/wine-barrels-wedding-ceremony-decor.jpg?b=1&s=170667a&w=0&k=20&c=tDL45LL3DhgkaoJn69C7-cNYB1MtdN7R_jtmvIHK4GA="
  
  //     },{
  //       id:22,
  //       categoryId:4,
  //       companyName:"Presidency",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://media.istockphoto.com/id/1015802482/photo/wedding-venue.jpg?b=1&s=170667a&w=0&k=20&c=22C2NGjvRioARlvDjVUvDHGi3dewrw8st0GavLJS7Us="
  
  //     },{
  //       id:23,
  //       categoryId:4,
  //       companyName:"River View",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://media.istockphoto.com/id/1305359830/photo/vintage-rustic-venue-in-eucalyptus-forest-rustic-wooden-outdoor-ceremony.jpg?b=1&s=170667a&w=0&k=20&c=3H28aF1BrLzQg3Ic-AJFFjlxclNhyuPQupg7fUOAF9k="
  
  //     },{
  //       id:24,
  //       categoryId:4,
  //       companyName:"Malabar",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://media.istockphoto.com/id/497039777/photo/wedding-setting.jpg?b=1&s=170667a&w=0&k=20&c=MLiaGbBP6b97btYrBT7Z5YtrW-Iw5bw-ZD0Bce-d8FY="
  
  //     },{
  //       id:25,
  //       categoryId:5,
  //       companyName:"Cake Land",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://media.istockphoto.com/id/1357406787/photo/beautiful-wedding-cake-for-the-newlyweds-at-the-wedding-a-birthday-cake-at-a-banquet.jpg?b=1&s=170667a&w=0&k=20&c=7uMg0Hgj5MS--cZdtcNm11ZB5BTK1XeT2qQGoLfdIaE="
  
  //     },{
  //       id:26,
  //       categoryId:5,
  //       companyName:"Coco Spot",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://media.istockphoto.com/id/1391202204/photo/beautiful-wedding-cake-for-newlyweds-at-a-rustic-wedding-a-festive-cake-in-the-forest-style.jpg?b=1&s=170667a&w=0&k=20&c=CBI6gopEkUGJHdV-G1_jxXpjAtpLKnVsQOdhB9afoL8="
  
  //     },{
  //       id:27,
  //       categoryId:5,
  //       companyName:"Sharooz",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://media.istockphoto.com/id/1335018273/photo/light-buttercream-wedding-cake-with-berries.jpg?b=1&s=170667a&w=0&k=20&c=x7iVWNR5qetRv38VazuOSmmsbTRjIMv61YIkg4XOdJw="
  
  //     },{
  //       id:28,
  //       categoryId:5,
  //       companyName:"Famous",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  
  //     },{
  //       id:29,
  //       categoryId:5,
  //       companyName:"Lachus",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://images.unsplash.com/photo-1623428454614-abaf00244e52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZyUyMGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  
  //     },{
  //       id:30,
  //       categoryId:5,
  //       companyName:"K.R Bakes",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://images.unsplash.com/photo-1561702856-b4ec96854ed8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2VkZGluZyUyMGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  
  //     },{
  //       id:31,
  //       categoryId:6,
  //       companyName:"One Direction",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://media.istockphoto.com/id/1161558644/photo/everything-is-almost-finished-for-wedding-ceremony.jpg?b=1&s=170667a&w=0&k=20&c=1EJMtH7apE1KPzeLRVSE6HtmbzUfR6ar_8y4J4H_hUs="
  
  //     },{
  //       id:32,
  //       categoryId:6,
  //       companyName:"Zail",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://media.istockphoto.com/id/1171816219/photo/wedding-ceremony-at-beautiful-farm.jpg?b=1&s=170667a&w=0&k=20&c=PrwYusBgXL4-cZK1unGWTqVcR1-ogHTBT7YZ1EiGsiY="
  
  //     },{
  //       id:33,
  //       categoryId:6,
  //       companyName:"Dream Day",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://media.istockphoto.com/id/1177485677/photo/table-setting-for-an-event-party-or-wedding-reception.jpg?b=1&s=170667a&w=0&k=20&c=Ook3N3SPM859bZSqMGshBs8F9XYjdMKHpV1b5SU7nxM="
  
  //     },{
  //       id:34,
  //       categoryId:6,
  //       companyName:"Alain",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://media.istockphoto.com/id/587197548/photo/beautiful-setting-for-outdoors-wedding-ceremony.jpg?b=1&s=170667a&w=0&k=20&c=lY1MdxPc-wo7OkiiZRQgJaitSUsrJeyAQW4czyarDD8="
  
  //     },{
  //       id:35,
  //       categoryId:6,
  //       companyName:"Zakarath",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://media.istockphoto.com/id/479977238/photo/table-setting-for-an-event-party-or-wedding-reception.jpg?b=1&s=170667a&w=0&k=20&c=agmliZ-KOhHqyPv2AKoL0Gft1A02pEQbE5vOIDCqUU0="
  
  //     },{
  //       id:36,
  //       categoryId:6,
  //       companyName:"Hazar",
  //       description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //       companyImg:"https://media.istockphoto.com/id/1350434563/photo/beautiful-white-wedding-arch-for-wedding-ceremony-decorated-with-flowers-lightbulbs-and-sign.jpg?b=1&s=170667a&w=0&k=20&c=0ugvk9QTqoW50mc2YCkr6BUaItBOd6g7iizpLdvnjZM="
  
  //     },
  // ]
  // admin=[
  //   {
  //     name:"shafeel",
  //     password:"shafell9061"
  //   }
  // ]
// register


register(userName:any,phno:any,password:any){
  const data={
    userName,
    phno,
    password
  }
  return this.http.post('http://localhost:3000/api/user/register',data)

}

// login 

login(phno:any,password:any){
  const data={
    phno,
    password
  }
 return this.http.post('http://localhost:3000/api/user/login',data)
}


// addCategory
 addCategory(data:any){
  return this.http.post('http://localhost:3000/api/category',data)
 }

//  getCategory
    getCategory(){
       
       return this.http.get('http://localhost:3000/api/category')
    }


//  addcategoryIems
 addCategoryItem(data:any){
 
  return this.http.post('http://localhost:3000/api/categoryitem',data)
 }

 //getcategory items

 getCategoryItems(){
  return this.http.get('http://localhost:3000/api/categoryitem')
 }
}
