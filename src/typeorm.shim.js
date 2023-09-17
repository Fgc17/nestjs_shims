/* eslint-disable @typescript-eslint/no-unused-vars */

export function Column(typeOrOptions, options) {
  return function (object, propertyName) {};
}

export function CreateDateColumn(options) {
  return function (object, propertyName) {};
}

export function DiscriminatorColumn(discriminatorOptions) {
  return function (object, propertyName) {};
}

export function ObjectIdColumn(columnOptions) {
  return function (object, propertyName) {};
}

export function PrimaryColumn(typeOrOptions, options) {
  return function (object, propertyName) {};
}

export function PrimaryGeneratedColumn(options) {
  return function (object, propertyName) {};
}

export function UpdateDateColumn(options) {
  return function (object, propertyName) {};
}

export function VersionColumn(options) {
  return function (object, propertyName) {};
}

// entities

export function AbstractEntity() {
  return function (object) {};
}

export function ClassEntityChild(tableName, options) {
  return function (object) {};
}

export function ClosureEntity(name, options) {
  return function (object) {};
}

export function EmbeddableEntity() {
  return function (object) {};
}

export function SingleEntityChild() {
  return function (object) {};
}

export function Entity(name, options) {
  return function (object) {};
}

export function TableInheritance(type) {
  return function (object) {};
}

// listeners

export function AfterInsert() {
  return function (object, propertyName) {};
}

export function AfterLoad() {
  return function (object, propertyName) {};
}

export function AfterRemove() {
  return function (object, propertyName) {};
}

export function AfterUpdate() {
  return function (object, propertyName) {};
}

export function BeforeInsert() {
  return function (object, propertyName) {};
}

export function BeforeRemove() {
  return function (object, propertyName) {};
}

export function BeforeUpdate() {
  return function (object, propertyName) {};
}

export function EventSubscriber() {
  return function (object, propertyName) {};
}

// relations

export function JoinColumn(options) {
  return function (object, propertyName) {};
}

export function JoinTable(options) {
  return function (object, propertyName) {};
}

export function ManyToMany(typeFunction, inverseSideOrOptions, options) {
  return function (object, propertyName) {};
}

export function ManyToOne(typeFunction, inverseSideOrOptions, options) {
  return function (object, propertyName) {};
}

export function OneToMany(typeFunction, inverseSideOrOptions, options) {
  return function (object, propertyName) {};
}

export function OneToOne(typeFunction, inverseSideOrOptions, options) {
  return function (object, propertyName) {};
}

export function RelationCount(relation) {
  return function (object, propertyName) {};
}

export function RelationId(relation) {
  return function (object, propertyName) {};
}

// tables (deprecated)

export function AbstractTable() {
  return function (object) {};
}

export function ClassTableChild(tableName, options) {
  return function (object) {};
}

export function ClosureTable(name, options) {
  return function (object) {};
}

export function EmbeddableTable() {
  return function (object) {};
}

export function SingleTableChild() {
  return function (object) {};
}

export function Table(name, options) {
  return function (object) {};
}

// tree

export function TreeChildren(options) {
  return function (object, propertyName) {};
}

export function TreeLevelColumn() {
  return function (object, propertyName) {};
}

export function TreeParent(options) {
  return function (object, propertyName) {};
}

// other

export function DiscriminatorValue(options) {
  return function (object, propertyName) {};
}

export function Index(options) {
  return function (object, propertyName) {};
}
