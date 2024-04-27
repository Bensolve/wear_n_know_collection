"use client";

import { Button } from "@/components/ui/button";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

 const handleChangePage = (type) => {
  const nextPage = type === "prev" ? Math.max(parseInt(page) - 1, 1) : parseInt(page) + 1;
  params.set("page", nextPage);
  replace(`${pathname}?${params}`);
};


  return (
    <div className="px-10 flex justify-between items-center gap-4">
      <div>
        <Button
          className=""
          disabled={!hasPrev}
          onClick={() => handleChangePage("prev")}
        >
          Previous
        </Button>
      </div>
      <div>
        <Button
          className=""
          disabled={!hasNext}
          onClick={() => handleChangePage("next")}
        >
          Next
        </Button>
      </div>

    </div>
  );
};

export default Pagination;