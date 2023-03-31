import {
    getApiUrl,
    getToken,
    parseJWT,
    tokenIsExpired,
    storageAppUserConstants,
    getActiveToken,
    getUserPermissions,
    isAuthenticated,
    buildRequestHeader,
    logout,
    fillSessionStorageWith,
    setLoginData,
} from './_helpers/auth';

import { getDate, getNow } from './_helpers/date';
import { getImagePath } from './_helpers/path';
import { queryStringToJson, jsonToQueryString } from './_helpers/query';
import { scrollToElement, scrollToTop } from './_helpers/scroll';
import {
    getLocalStorageItem,
    setILocalStorageItem,
    removeLocalStorageItem,
    getSessionStorageItem,
    setISessionStorageItem,
    removeSessionsetISessionStorageItem,
} from './_helpers/storage';
import { toCapitalize } from './_helpers/text';

import {
    getFileExtension,
    sleep,
    isObject,
    deepmerge,
    deepCopy,
    ticksToDate,
    getTicksDate,
    cleanNullProperty,
    getDownloadFile,
    getFilesize,
    getDmsPath,
} from './_helpers/utility';

import { calculateEditorContentHeight } from './_helpers/actions';

import { setCookie, getCookie, removeCookie } from './_helpers/cookies';

export {
    setCookie,
    getCookie,
    removeCookie,
    calculateEditorContentHeight,
    getApiUrl,
    getToken,
    parseJWT,
    tokenIsExpired,
    storageAppUserConstants,
    getActiveToken,
    getUserPermissions,
    isAuthenticated,
    buildRequestHeader,
    logout,
    fillSessionStorageWith,
    setLoginData,
    getFileExtension,
    sleep,
    isObject,
    deepmerge,
    deepCopy,
    ticksToDate,
    getTicksDate,
    cleanNullProperty,
    getDownloadFile,
    getFilesize,
    getDmsPath,
    getLocalStorageItem,
    setILocalStorageItem,
    removeLocalStorageItem,
    getSessionStorageItem,
    setISessionStorageItem,
    removeSessionsetISessionStorageItem,
    scrollToElement,
    scrollToTop,
    queryStringToJson,
    jsonToQueryString,
    getImagePath,
    getDate,
    getNow,
    toCapitalize,
};

//hooks

export { default as useDebounce } from './_hooks/useDebounce';
export { default as useDevice } from './_hooks/useDevice';
export { default as useForm } from './_hooks/useForm';
export { default as useIsFirstRender } from './_hooks/useIsFirstRender';
export { default as useMesasure } from './_hooks/useMeasure';
export { default as useTitle } from './_hooks/useTitle';
export { default as useWatch } from './_hooks/useWatch';
export { default as useWidth } from './_hooks/useWidth';

//cpöğ



import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,IconButton,Collapse,Popover,Avatar} from '@mui/material'
export {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,IconButton,Collapse,Popover,Avatar} 

//app
export {default as Navbar }  from './components/App/Navbar'
export {default as Provider }  from './components/App/Provider'
export {default as ThemeWrapper }  from './components/App/ThemeWrapper'

//Form
export { default as Autocomplete } from './components/Form/AutoComplete'
export { default as Button } from './components/Form/Button';
export { default as ButtonGroup } from './components/Form/ButtonGroup';
export { default as DatePicker } from './components/Form/DatePicker';
export { default as DateTimePicker } from './components/Form/DateTimePicker';
export { default as Checkbox } from './components/Form/Checkbox';
export { default as Input } from './components/Form/Input';
export { default as NumberInput } from './components/Form/NumberInput'
export { default as Radio } from './components/Form/Radio'
export { default as RadioGroup } from './components/Form/RadioGroup'
export { default as RangeInput } from './components/Form/RangeInput'
// export { default as RichEditor } from './components/Form/RichEditor'
export { default as Select } from './components/Form/Select';
export { default as Switch } from './components/Form/Switch';
export { default as TimePicker } from './components/Form/TimePicker';
export { default as Upload } from './components/Form/Upload';
export { default as MultiSelect } from './components/Form/MultiSelect';

//display
export { default as Accordion } from './components/Display/Accordion';
export { default as Alert } from './components/Display/Alert';
export { default as Box } from './components/Display/Box';
export { default as Carousel } from './components/Display/Carousel/Carousel';
export { default as Chart } from './components/Display/Chart';
export { default as Confirm } from './components/Display/Confirm';
export { default as CustomScrollbar } from './components/Display/CustomScrollbar';
export { default as Divider } from './components/Display/Divider';
export { default as DropDown } from './components/Display/DropDown';
export { default as Empty } from './components/Display/Empty';
export { default as Grid } from './components/Display/Grid/Grid';
export { default as GridBox } from './components/Display/Grid/GridBox';
export { default as GridBreak } from './components/Display/Grid/GridBreak';
export { default as GridItem } from './components/Display/Grid/GridItem';
export { default as GridItemTitle } from './components/Display/Grid/GridItemTitle';
export { default as KeyValueList } from './components/Display/KeyValueList';
export { default as Loader } from './components/Display/Loader';
export { default as LoadingModal } from './components/Display/LoadingModal';
export { default as Modal } from './components/Display/Modal';
export { default as ModalBody } from './components/Display/Modal/ModalBody';
export { default as ModalTitle } from './components/Display/Modal/ModalTitle';
export { default as ModalFooter} from './components/Display/Modal/ModalFooter';
export { default as NavContainer } from './components/Display/Nav/NavContainer';
export { default as NavItem } from './components/Display/Nav/NavItem';
export { default as NavRow } from './components/Display/Nav/NavRow';
export { default as NavTitle } from './components/Display/Nav/NavTitle';
export { default as MainNavigation } from './components/Display/Navigation/MainNavigation';
export { default as Paper } from './components/Display/Paper';
export { default as Popup } from './components/Display/Popup';
export { default as Progress } from './components/Display/Progress';
export { default as Rating } from './components/Display/Rating';
export { default as ScrollPageTop } from './components/Display/ScrollPageTop';
export { default as Swiper } from './components/Display/Swiper';
export { default as Title } from './components/Display/Title';
export { default as Tabs } from './components/Display/Tab';
export { default as TableSort } from './components/Display/TableSort';
export { default as TablePagination } from './components/Display/TablePagination';
export { default as Tooltip } from './components/Display/Tooltip';
export { default as View } from './components/Display/View';




