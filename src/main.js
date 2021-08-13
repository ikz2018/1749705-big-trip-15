import TripEditView from './view/edit-event.js';
import SiteMenuView from './view/site-menu.js';
import TripEventsItemView from './view/trip-events-item.js';
import TripEventsListView from './view/trip-events-list.js';
import TripFiltersView from './view/trip-filters.js';
import TripInfoCostView from './view/trip-info-cost.js';
import TripInfoMainView from './view/trip-info-main.js';
import TripInfoView from './view/trip-info.js';
import TripSortView from './view/trip-sort.js';
import {generatePoint} from './mock/waypoint.js';
import {render, RenderPosition} from './utils.js';

const TRIP_EVENTS_COUNT = 20;
const TRIP_MAIN_ELEMENT = document.querySelector('.trip-main');
const TRIP_CONTROLS_NAVIGATION_ELEMENT = TRIP_MAIN_ELEMENT.querySelector('.trip-controls__navigation');
const TRIP_CONTROLS_FILTERS_ELEMENT = TRIP_MAIN_ELEMENT.querySelector('.trip-controls__filters');

const points = new Array(TRIP_EVENTS_COUNT).fill().map(generatePoint);

render(TRIP_CONTROLS_NAVIGATION_ELEMENT, new SiteMenuView().getElement(), RenderPosition.BEFOREEND);
render(TRIP_CONTROLS_FILTERS_ELEMENT, new TripFiltersView().getElement(), RenderPosition.BEFOREEND);
render(TRIP_MAIN_ELEMENT, new TripInfoView().getElement(), RenderPosition.AFTERBEGIN);

const TRIP_INFO_ELEMENT = TRIP_MAIN_ELEMENT.querySelector('.trip-info');
render(TRIP_INFO_ELEMENT, new TripInfoMainView().getElement(), RenderPosition.AFTERBEGIN);
render(TRIP_INFO_ELEMENT, new TripInfoCostView().getElement(), RenderPosition.BEFOREEND);

const TRIP_EVENTS_ELEMENT = document.querySelector('.trip-events');
render(TRIP_EVENTS_ELEMENT, new TripSortView().getElement(), RenderPosition.AFTERBEGIN);
render(TRIP_EVENTS_ELEMENT, new TripEventsListView().getElement(), RenderPosition.BEFOREEND);

const TRIP_EVENTS_LIST_ELEMENT = TRIP_EVENTS_ELEMENT.querySelector('.trip-events__list');
render(TRIP_EVENTS_LIST_ELEMENT, new TripEditView(points[0]).getElement(), RenderPosition.AFTERBEGIN);

const renderTask = (taskListElement, task) => {
  const tripComponent = new TripEventsItemView(task);
  const tripEditComponent = new TripEditView(task);

  const replacePointToForm = () => {
    taskListElement.replaceChild(tripEditComponent.getElement(), tripComponent.getElement());
  };

  const replaceFormToPoint = () => {
    taskListElement.replaceChild(tripComponent.getElement(), tripEditComponent.getElement());
  };

  const onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      replaceFormToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  };

  tripComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click', () => {
    replacePointToForm();
    document.addEventListener('keydown', onEscKeyDown);
  });

  tripEditComponent.getElement().querySelector('form').addEventListener('submit', (evt) => {
    evt.preventDefault();
    replaceFormToPoint();
    document.removeEventListener('keydown', onEscKeyDown);
  });

  tripEditComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click', () => {
    replaceFormToPoint();
    document.removeEventListener('keydown', onEscKeyDown);
  });

  render(taskListElement, tripComponent.getElement(), RenderPosition.BEFOREEND);
};

for (let i = 0; i < TRIP_EVENTS_COUNT; i++) {
  renderTask(TRIP_EVENTS_LIST_ELEMENT, points[i]);
}
