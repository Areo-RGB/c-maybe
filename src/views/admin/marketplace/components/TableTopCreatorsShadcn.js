import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Box } from "components/shadcn/ui/box";
import { Flex } from "components/shadcn/ui/flex";
import { Text } from "components/shadcn/ui/text";
import { Image } from "components/shadcn/ui/image";

const columnHelper = createColumnHelper();

export default function TableTopCreatorsShadcn(props) {
  const { tableData, columnsData } = props;
  const [sorting, setSorting] = React.useState([]);
  
  // Tailwind dark mode classes
  const textColor = "text-secondaryGray-900 dark:text-white";
  const textColorSecondary = "text-secondaryGray-600 dark:text-white";
  const borderColor = "border-gray-200 dark:border-whiteAlpha-100";
  
  let defaultData = tableData;
  
  const columns = [
    columnHelper.accessor('name', {
      id: 'name',
      header: () => (
        <Text
          className="text-center text-xs lg:text-sm text-gray-400"
        >
          NAME
        </Text>
      ),
      cell: (info) => (
        <Flex className="items-center">
          <div className="w-[30px] h-[30px] mr-2 rounded-full overflow-hidden">
            <Image 
              src={info.getValue()[1]} 
              alt={info.getValue()[0]}
              className="w-full h-full object-cover"
            />
          </div>
          <Text className={`${textColor} text-sm font-semibold`}>
            {info.getValue()[0]}
          </Text>
        </Flex>
      ),
    }),
    columnHelper.accessor('artworks', {
      id: 'artworks',
      header: () => (
        <Text
          className="text-center text-xs lg:text-sm text-gray-400"
        >
          ARTWORKS
        </Text>
      ),
      cell: (info) => (
        <Text className={`${textColorSecondary} text-sm font-medium`}>
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('rating', {
      id: 'rating',
      header: () => (
        <Text
          className="text-center text-xs lg:text-sm text-gray-400"
        >
          RATING
        </Text>
      ),
      cell: (info) => (
        <Flex className="items-center">
          <div className="h-2 w-[108px] bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-brand-500 dark:bg-brand-400 rounded-full" 
              style={{ width: `${info.getValue()}%` }}
            ></div>
          </div>
        </Flex>
      ),
    }),
  ];
  
  const [data, setData] = React.useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });
  
  return (
    <Flex
      className="flex-col w-full overflow-x-auto lg:overflow-x-hidden"
    >
      <Flex
        className="sm:items-start lg:items-center justify-between w-full px-[22px] pb-5 mb-[10px] shadow-lg"
      >
        <Text className={`${textColor} text-xl font-semibold`}>
          Top Creators
        </Text>
        <button className="bg-transparent hover:bg-gray-100 text-brand-500 font-semibold py-2 px-4 rounded">
          See all
        </button>
      </Flex>
      <Box>
        <div className="w-full min-w-0 overflow-x-auto">
          <table className="w-full min-w-[500px] table-auto mt-3">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      className={`px-3 py-2 ${borderColor} cursor-pointer`}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <Flex
                        className="justify-between items-center text-xs lg:text-sm text-gray-400"
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        <span>
                          {{
                            asc: '↑',
                            desc: '↓',
                          }[header.column.getIsSorted()] ?? null}
                        </span>
                      </Flex>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table
                .getRowModel()
                .rows.slice(0, 7)
                .map((row) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="px-3 py-3 text-sm sm:min-w-[150px] md:min-w-[200px] lg:min-w-auto border-transparent"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Box>
    </Flex>
  );
} 