import { getProductByKeywordAction } from "@/app/actions/services/productAPI";
import Image from "next/image";
import React from "react";

const Search = async ({ searchParams }) => {
    // props.searchParams.keyword
    const search = await searchParams;
    const keyword = search.keyword || "";
    console.log("keyword: ", keyword);

    const data = await getProductByKeywordAction(keyword);

    return (
        <div className="container">
            <h1 className="text-center text-red-500">
                Danh sách kết quả tìm kiếm
            </h1>

            <div className="grid grid-cols-3 gap-2">
                {data.map((item) => {
                    return (
                        <div key={item.id} className="border border-amber-700">
                            <Image
                                src={item.image}
                                width={200}
                                height={200}
                                quality={100}
                                alt=""
                            />

                            <p>{item.name}</p>
                            <p>{item.price}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Search;
