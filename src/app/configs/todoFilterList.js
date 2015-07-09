import FilterConst from '../constants/TodoFilterConstants';

export default [
  { title: 'All', path: '/', value: FilterConst.ALL },
  { title: 'active', path: '/active', value: FilterConst.ACTIVE },
  { title: 'completed', path: '/completed', value: FilterConst.COMPLETED }
]