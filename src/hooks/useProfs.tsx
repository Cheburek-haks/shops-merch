import { useQuery } from "react-query";
import { ApiService } from "../API/Api.service";
import { IProfessions } from "../types/Types";
export const useProfs = (name: string) => {
  const {
    isLoading,
    data: profs,
    error,
  } = useQuery(["professions list", name], () => ApiService.getAll(name), {
    onError: (error: any) => {
      alert(error.message);
    },
    select: ({ data }): IProfessions[] =>
      data.map((item) => ({ ...item, name: `${item.name} fuck you` })),
    enabled: !!name,
  });

  return {
    isLoading,
    profs,
    error,
  };
};
