import React, { useMemo } from 'react';

import type { AbsoluteListing, Listing } from '@/common/types/types';
import { transformData } from '@/common/utils/transformData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';

interface CellProps {
  Header: string;
  accessor: keyof AbsoluteListing; // Ensure accessor matches keys of AbsoluteListing
  elementType: 'text' | 'link' | 'image' | 'badge' | 'button';
  width?: string; // Optional width property for the column
}

interface DataTableProps {
  data: Listing[];
  headers: CellProps[];
  order: { accessor: keyof AbsoluteListing; direction: 'asc' | 'desc' } | null;
  setOrder: (accessor: keyof AbsoluteListing) => void;
  loading?: boolean;
}

const formatCellValue = (value: string | number | boolean | Date): React.ReactNode => {
  if (value instanceof Date) {
    return value.toLocaleDateString(); // Format the date as a string
  }
  return value;
};

const Text = (text: string) => <span className="cursor-default">{text}</span>;
const Link = (text: string, url: string, isSold: boolean) => (
  console.log('text: ', text),
  (
    <a
      href={url}
      target="_blank"
      className={cn('underline', isSold ? 'text-red-600' : 'text-gray-200')}
      rel="noreferrer"
    >
      {text === '' || text.length === 0 ? 'link' : text}
    </a>
  )
);
const Image = (src: string, isSold: boolean) => (
  <img
    src={src}
    alt="Listing"
    className={cn(
      'w-[80px] h-[50px] object-cover rounded-xl cursor-pointer border border-zinc-500  shadow-zinc-800',
      isSold ? 'border-red-800 border-4 opacity-85' : 'border-zinc-500',
    )}
  />
);
const SoldBadge = (text: boolean) => {
  return text ? (
    <Badge className="bg-transparent text-destructive">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z"
          clipRule="evenodd"
        />
      </svg>
    </Badge>
  ) : (
    <Badge className=" text-primary-foreground bg-transparent">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="size-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
          clipRule="evenodd"
        />
      </svg>
    </Badge>
  );
};
const CopyIdButton = (id: string) => (
  <Button
    className="px-3 h-8 text-xs font-semibold bg-transparent border rounded-md cursor-pointer text-zinc-400"
    onClick={() => {
      console.log('Button clicked with id:', id);
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6"
    >
      <path
        fillRule="evenodd"
        d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375ZM6 12a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V12Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 15a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V15Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 18a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V18Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  </Button>
);

const renderElement = (
  elementType: string,
  value: string | number | boolean | Date,
  link: string,
  isSold: boolean,
) => {
  const formattedValue = formatCellValue(value);
  switch (elementType) {
    case 'text':
      return Text(formattedValue as string);
    case 'link':
      return Link(formattedValue as string, link, isSold);
    case 'image':
      return Image(formattedValue as string, isSold);
    case 'badge':
      return SoldBadge(formattedValue as boolean);
    case 'button':
      return CopyIdButton(formattedValue as string);
    default:
      return formattedValue;
  }
};

const DataTable = ({ data, headers, order, setOrder, loading }: DataTableProps) => {
  const transformedData = transformData(data);

  const sortedData = useMemo(() => {
    if (!order) return transformedData;
    return [...transformedData].sort((a, b) => {
      const aValue = a[order.accessor];
      const bValue = b[order.accessor];
      if (aValue < bValue) return order.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return order.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [transformedData, order]);

  const handleHeaderClick = (accessor: keyof AbsoluteListing) => {
    setOrder(accessor);
  };

  return (
    <div className="relative w-full overflow-auto rounded-md shadow-xl">
      <Table className="caption-bottom text-sm w-full ">
        <TableHeader className="rounded-md">
          <TableRow className="border-none h-20 bg-zinc-950/35 hover:bg-zinc-950/35">
            {headers.map((header, index) => (
              <TableHead
                key={index}
                className={cn(
                  'px-4 py-2 text-start text-xs text-primary-foreground/80',
                  header.width,
                )}
              >
                <div className="flex items-center">
                  <span>{header.Header}</span>
                  <button onClick={() => handleHeaderClick(header.accessor)} className="ml-2">
                    {order?.accessor === header.accessor ? (
                      order.direction === 'asc' ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="size-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="size-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading
            ? // Render skeleton rows
              Array.from({ length: 5 }).map((_, rowIndex) => (
                <TableRow key={rowIndex} className="w-full">
                  <td colSpan={headers.length} className="w-full px-0 py-2">
                    <Skeleton className="w-full h-16 bg-zinc-950/50" />
                  </td>
                </TableRow>
              ))
            : sortedData.length > 0
              ? sortedData.map((item, index) => (
                  <TableRow
                    key={index}
                    className={cn(
                      index % 2 === 0 ? 'bg-zinc-900/50' : 'bg-zinc-900/75',
                      'border-none hover:bg-zinc-900/60',
                    )}
                  >
                    {headers.map((header, headerIndex) => (
                      <TableCell
                        key={headerIndex}
                        className="px-4 mt-2 mb-2 text-start text-sm text-gray-100"
                      >
                        {renderElement(
                          header.elementType,
                          item[header.accessor],
                          item.link,
                          item.isSold,
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              : // Render empty rows
                Array.from({ length: 5 }).map((_, rowIndex) => (
                  <TableRow key={rowIndex} className="w-full">
                    <td colSpan={headers.length} className="w-full px-0 py-2">
                      <div className="w-full h-16 "></div>
                    </td>
                  </TableRow>
                ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;
