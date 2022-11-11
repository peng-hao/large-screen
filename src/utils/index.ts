/**
 * 格式化下拉
 *
 */
export const formatSelect = (arr: any[]) => {
  let list = [] as { label: '', value: '' }[];
  list = arr.map((x: any) => ({ label: x.primarySource, value: x.primarySource }));
  return list;
};
