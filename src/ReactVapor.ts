import { ILastUpdatedState } from './components/lastUpdated/LastUpdatedReducers';
import { IFacetState } from './components/facets/FacetReducers';
import { IFilterState } from './components/filterBox/FilterBoxReducers';
import { IFacet } from './components/facets/Facet';
import { IPerPageState } from './components/navigation/perPage/NavigationPerPageReducers';
import { ILoadingState } from './components/loading/LoadingReducers';
import { IPaginationState } from './components/navigation/pagination/NavigationPaginationReducers';
import { IInlinePromptOptions } from './components/inlinePrompt/InlinePrompt';
import { IPromptState } from './components/inlinePrompt/InlinePromptReducers';
import { IActionOptions } from './components/actions/Action';
import { IActionBarState } from './components/actions/ActionBarReducers';
import { IDropdownState } from './components/dropdown/DropdownReducers';
import { ITableRowState } from './components/tables/TableRowReducers';
import { IOptionsCycleState } from './components/optionsCycle/OptionsCycleReducers';
import { IDatePickerState } from './components/datePicker/DatePickerReducers';
import { IOptionPickerState } from './components/optionPicker/OptionPickerReducers';
import { IItemFilterState } from './components/actions/filters/ItemFilterReducers';
import { ISubNavigationState } from './components/subNavigation/SubNavigationReducers';

export interface IReactVaporState {
  lastUpdatedComposite?: ILastUpdatedState[];
  facets?: IFacetState[];
  filters?: IFilterState[];
  perPageComposite?: IPerPageState[];
  paginationComposite?: IPaginationState[];
  loadings?: ILoadingState[];
  prompts?: IPromptState[];
  actionBars?: IActionBarState[];
  dropdowns?: IDropdownState[];
  rows?: ITableRowState[];
  optionsCycles?: IOptionsCycleState[];
  datePickers?: IDatePickerState[];
  optionPickers?: IOptionPickerState[];
  itemFilters?: IItemFilterState[];
  subNavigations?: ISubNavigationState[];
}

export interface IReduxActionsPayload {
  id?: string;
  ids?: string[];
  facet?: string;
  facetRow?: IFacet;
  filterText?: string;
  pageNb?: number;
  perPage?: number;
  options?: IInlinePromptOptions;
  actions?: IActionOptions[];
  currentOption?: number;
  color?: string;
  date?: Date;
  calendarId?: string;
  value?: string;
  isRange?: boolean;
  limit?: string;
  item?: string;
  label?: string;
  selected?: string;
}
