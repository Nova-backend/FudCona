import React from "react";
import Graph from "./graph";
// import items from "./items";

function Body() {
  //   const [data, setData] = useState(items);
  const items = [
    {
      id: 1,
      head: "Restaurant",
      sales: "sales",
      saleName:" salelina",
      name: "Soy",
    },
    {
      id: 2,
      head: "Restaurant",
      sales: "sales",
      saleName: "salelina",
      name: "Soy",
    },
    

    {
      id: 3,
      head: "Restaurant",
      sales: "sales",
      saleName: "salelina",
      name: "Soy",
    },
    

    {
      id: 3,
      head: "Restaurant",
      sales: "sales",
      saleName: "salelina",
      name: "Soy",
    }
    
  ];
  return (
    <div>
      <div className="bg-[#FAFAF5] h-[150vh] w-[85%] float-right">
        <h3 className="p-[10px] pl-[55px] font-[800] text-[25px] mt-[-5px]">
          Overview
        </h3>
        <div className="grid lg:grid-cols-3 gap-[200px] p-[25px] w-[70%] absolute left-[21rem] top-[30px]">
          <div className="h-[160px] w-[320px] bg-white border-[10px to-black] block p-[30px] border-solid border-2 border-[#989A38] rounded-lg">
            <h4 className="text-center font-[100] p-[5px] text-[40px] opacity-[0.8] ">
              clients
            </h4>
            <h1 className="text-center font-[600] p-[5px] text-[30px]">60</h1>
          </div>
          <div className="h-[160px] w-[320px] bg-[#989A38] border-[10px to-black] block p-[40px] border-solid border-2 border-[#989A38] rounded-lg">
            <p className="text-center text-white font-[100] p-[15px] text-[20px] ml-[-12px]  opacity-[0.8]">
              Revenew(frw)
            </p>
            <h1 className="text- text-white font-[600] p-[4px] ml-[65px] text-[15px]">
              434343434
            </h1>
          </div>
          <div className="h-[160px] w-[320px] bg-white border-[10px to-black] p-[25px] border-solid border-2 border-[#989A38] rounded-lg">
            <p className="text-center font-[100] p-[5px] text-[30px] opacity-[0.8] mt-[10px]">
              Orders
            </p>
            <h1 className="text-center font-[600] p-[5px] text-[30px]">5756</h1>
          </div>
        </div>
        <div className="min-h-[400px] w-[77%] bg-white absolute top-[32%] left-[18.5%] border-solid border-2 border-[#989A38] shadow-2xl">
          <h1 className="font[600] text-[23px] p-2">Today's trends</h1>

          <h2 className="p-2 mt-[-12px]">25 May 2022 09:39 AM</h2>
          <ul className="flex justify-center align-center items-center mt-[-66px] ml-[-8  0px] ">
            <li className=" h-[4px] w-[40px] bg-[#989A38]  "></li>
            <li className="p-[10px] text-[18px] font-light">Todays</li>
            <li className=" h-[4px] w-[40px] bg-[#989A38] opacity-50"></li>
            <li className="p-[10px] text-[18px] font-light">Weeks</li>
            <li className=" h-[4px] w-[40px] bg-[#989A38] text-[18px] opacity-50"></li>
            <li className="p-[10px] font-light">Months</li>
          </ul>
          <div className="w-[900px] ml-[4rem]">

            <Graph />
            
          </div>
          <div className="float-right mt-[-32rem]">
            <div className="h-[100px] w-[250px] border-solid border-2 border-[#989A38]   pl-[90px] ">
              <p className="text-[20px] opacity-80 mt-[10px]">orders</p>
              <h1 className=" text-[20px] font-[600] ml-[7px]">7366</h1>
            </div>
            <div className="h-[100px] w-[250px] border-solid border-2 border-[#989A38]  pl-[90px]">
              <p className="text-[20px] opacity-80 mt-[10px]">orders</p>
              <h1 className=" text-[20px] font-[600] ml-[7px]">7366</h1>
            </div>
            <div className="h-[100px] w-[250px] border-solid border-2 border-[#989A38]  pl-[90px]">
              <p className="text-[20px] opacity-80 mt-[10px]">orders</p>
              <h1 className=" text-[20px] font-[600] ml-[7px]">7366</h1>
            </div>

            <div className="h-[100px] w-[250px] border-solid border-2 border-[#989A38]  pl-[90px]">
              <p className="text-[20px] opacity-80 mt-[10px]">orders</p>
              <h1 className=" text-[20px] font-[600] ml-[7px]">7366</h1>
            </div>

            <div className="h-[120px] w-[250px] border-solid border-2 border-[#989A38]  pl-[90px]">
              <p className="text-[20px] opacity-80 mt-[10px]">orders</p>
              <h1 className=" text-[20px] font-[600] ml-[7px]">7366</h1>
            </div>
          </div>
        </div>
        <div className="flex ">
          <div className="absolute bottom-[10px] top-[97%] left-[18%]  p-8 h-[55%] ">
            <div className="grid lg:grid-cols-2 gap-[28px] ml-[-30px]">
              
              {items.map((item) => {
                const { id, head, sales, saleName, name } = item;
                return (
                  <div
                    className="h-[180px] w-[380px] bg-white p-[5px] pl-[30px] bock shadow-[#c5b9b9] shadow-lg"
                    key={id}
                  >
                    <div className="flex">
                      <div className="block">
                        <h1 className="font[600] text-[23px]  ">{head}</h1>
                        <p className="opacity-80">{sales}</p>
                        <p className="pt-[20px]">{saleName}</p>
                      </div>

                      <div className="block mt-[10px]">
                        <h1 className="pl-[35px] text-[#989A38]">
                          View details
                        </h1>
                        <p className="pl-[80px] pt-[40px] opacity-80">46000</p>
                      </div>
                    </div>
                    <div className="h-[1px] w-[250px] bg-[#706c6c]"></div>
                    <div className="flex pt-[10px]">
                      <p>{name}</p>
                      <p className="pl-[170px] opacity-80">12000</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" bg-white h-[47.5%] mt-[10px] w-[28%] absolute top-[100%] pl-[20px] right-[5%] shadow-[#c5b9b9] shadow-lg">
            <div className="h-[180px] w-[405px] bg-white p-[5px] pl-[30px] bock">
              <div className="flex">
                <div className="block">
                  <h1 className="font[600] text-[23px]  ">Create</h1>
                  <p className="opacity-80">sales</p>
                  <p className="pt-[20px]">Sale lina</p>
                </div>

                <div className="block mt-[10px]">
                  <h1 className="pl-[135px] text-[#989A38]">View all</h1>
                  <p className="pl-[140px] pt-[40px] opacity-80">46000</p>
                </div>
              </div>
              <div className="h-[1px] w-[250px] bg-[#706c6c]"></div>
              <div className="flex pt-[10px]">
                <p className="h-[20px] w-[20px] rounded-[50%] border-solid border-2 border-[#9e9a9a]  bg-white"></p>
                <p className="pl-[10px]">Soy</p>
                <button className="ml-[120px]  p-[2px] text-white pl-[10px] w-[90px] bg-[#989A38]">
                  NEW
                </button>
              </div>
              <div className="h-[1px] w-[250px] bg-[#706c6c] mt-4"></div>
              <div className="flex pt-[10px] mt-[30px]">
                <p className="h-[20px] w-[20px] rounded-[50%] border-solid border-2 border-[#9e9a9a]  bg-white"></p>
                <p className="pl-[10px]">Soy</p>
                <button className="ml-[120px]  p-[2px] text-white pl-[10px] w-[90px] bg-[#989A38]">
                  NEW
                </button>
              </div>
              <div className="h-[1px] w-[250px] bg-[#706c6c] mt-4"></div>
              <div className="flex pt-[10px] mt-[30px]">
                <p className="h-[20px] w-[20px] rounded-[50%] border-solid border-2 border-[#9e9a9a]  bg-[#989A38]"></p>
                <p className="pl-[10px]">Soy</p>
                <button className="ml-[120px]  p-[2px] text-white pl-[10px] w-[90px] bg-[#989A38]">
                  DEFAULT
                </button>
              </div>
              <div className="h-[1px] w-[250px] bg-[#706c6c] mt-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
