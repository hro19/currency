import { format } from "date-fns";

export const dateFormatter = {
  // 2023/07/17 22:06:41
  byou: (created_at: string | Date) =>
    format(new Date(created_at), "yyyy/MM/dd HH:mm:ss"),
  // 2023/07/17 22:06
  fun: (created_at: string | Date) => format(new Date(created_at), "yyyy/MM/dd HH:mm"),
  // 2023/07/17 22
  funJap: (created_at: string | Date) =>
    format(new Date(created_at), "yy年MM月dd日 HH時mm分"),
  // 23年07月17日 22字33分
  zi: (created_at: string | Date) => format(new Date(created_at), "yyyy/MM/dd HH時"),
  // 23年07月17日
  dayJap: (created_at: string | Date) => format(new Date(created_at), "yy年M月d日"),
  // 07/17
  monthDay: (created_at: string | Date) => format(new Date(created_at), "MM/dd"),
  // 2023/07
  untilMonth: (created_at: string | Date) => format(new Date(created_at), "yyyy/MM"),
  // 2023
  year: (created_at: string | Date) => format(new Date(created_at), "yyyy"),
};