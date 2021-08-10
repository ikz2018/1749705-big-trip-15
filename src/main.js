import {createAddEventTemplate} from './view/add-event.js';
import {createEditEventTemplate} from './view/edit-event.js';
import {createSiteMenuTemplate} from './view/site-menu.js';
import {createTripEventsItemTemplate} from './view/trip-events-item.js';
import {createTripEventsListTemplate} from './view/trip-events-list.js';
import {createTripFiltersTemplate} from './view/trip-filters.js';
import {createTripInfoCostTemplate} from './view/trip-info-cost.js';
import {createTripInfoMainTemplate} from './view/trip-info-main.js';
import {createTripInfoTemplate} from './view/trip-info.js';
import {createTripSortTemplate} from './view/trip-sort.js';
import {generatePoint} from './mock/waypoint.js';

const TRIP_EVENTS_COUNT = 20;
const TRIP_MAIN_ELEMENT = document.querySelector('.trip-main');
const TRIP_CONTROLS_NAVIGATION_ELEMENT = TRIP_MAIN_ELEMENT.querySelector('.trip-controls__navigation');
const TRIP_CONTROLS_FILTERS_ELEMENT = TRIP_MAIN_ELEMENT.querySelector('.trip-controls__filters');

const points = new Array(TRIP_EVENTS_COUNT).fill().map(generatePoint);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

render(TRIP_CONTROLS_NAVIGATION_ELEMENT, createSiteMenuTemplate(), 'beforeend');
render(TRIP_CONTROLS_FILTERS_ELEMENT, createTripFiltersTemplate(), 'beforeend');
render(TRIP_MAIN_ELEMENT, createTripInfoTemplate(), 'afterbegin');

const TRIP_INFO_ELEMENT = TRIP_MAIN_ELEMENT.querySelector('.trip-info');
render(TRIP_INFO_ELEMENT, createTripInfoMainTemplate(), 'afterbegin');
render(TRIP_INFO_ELEMENT, createTripInfoCostTemplate(), 'beforeend');

const TRIP_EVENTS_ELEMENT = document.querySelector('.trip-events');
render(TRIP_EVENTS_ELEMENT, createTripSortTemplate(), 'afterbegin');
render(TRIP_EVENTS_ELEMENT, createTripEventsListTemplate(), 'beforeend');

const TRIP_EVENTS_LIST_ELEMENT = TRIP_EVENTS_ELEMENT.querySelector('.trip-events__list');
render(TRIP_EVENTS_LIST_ELEMENT, createEditEventTemplate(points[0]), 'afterbegin');
render(TRIP_EVENTS_LIST_ELEMENT, createAddEventTemplate(points[0]), 'afterbegin');

for (let i = 0; i < TRIP_EVENTS_COUNT; i++) {
  render(TRIP_EVENTS_LIST_ELEMENT, createTripEventsItemTemplate(points[i]), 'beforeend');
}
