import { filterThrough, removeFilter, addFilter } from './FilterBoxActions';
import { ReduxUtils, IReduxAction } from '../../utils/ReduxUtils';
import { IReactVaporState, IReduxActionPayload } from '../../ReactVapor';
import {
  FilterBox,
  IFilterBoxOwnProps,
  IFilterBoxStateProps,
  IFilterBoxDispatchProps,
  IFilterBoxProps
} from './FilterBox';
import { connect } from 'react-redux';
import * as _ from 'underscore';
import * as React from 'react';

const mapStateToProps = (state: IReactVaporState, ownProps: IFilterBoxOwnProps): IFilterBoxStateProps => {
  let filterItem = _.findWhere(state.filters, { id: ownProps.id });

  return {
    filterText: filterItem ? filterItem.filterText : ''
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionPayload>) => void): IFilterBoxDispatchProps => {
  return {
    onRender: (id: string) => dispatch(addFilter(id)),
    onDestroy: (id: string) => dispatch(removeFilter(id)),
    onFilter: (id: string, filterText: string) => dispatch(filterThrough(id, filterText))
  };
};

export const FilterBoxConnected: React.ComponentClass<IFilterBoxProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(FilterBox);
