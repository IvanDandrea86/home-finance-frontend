import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Account = {
  __typename?: 'Account';
  Family?: Maybe<Family>;
  createdAt: Scalars['DateTime'];
  familyId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  monthlyBudget: Scalars['Int'];
  name: Scalars['String'];
  sold: Scalars['Int'];
  type: AccountType;
  updatedAt: Scalars['DateTime'];
};

export type AccountCreateInput = {
  Family?: InputMaybe<FamilyCreateNestedOneWithoutAccountsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  monthlyBudget?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  sold?: InputMaybe<Scalars['Int']>;
  type: AccountType;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AccountCreateManyFamilyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  monthlyBudget?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  sold?: InputMaybe<Scalars['Int']>;
  type: AccountType;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AccountCreateManyFamilyInputEnvelope = {
  data: Array<AccountCreateManyFamilyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AccountCreateNestedManyWithoutFamilyInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutFamilyInput>>;
  create?: InputMaybe<Array<AccountCreateWithoutFamilyInput>>;
  createMany?: InputMaybe<AccountCreateManyFamilyInputEnvelope>;
};

export type AccountCreateOrConnectWithoutFamilyInput = {
  create: AccountCreateWithoutFamilyInput;
  where: AccountWhereUniqueInput;
};

export type AccountCreateWithoutFamilyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  monthlyBudget?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  sold?: InputMaybe<Scalars['Int']>;
  type: AccountType;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AccountListRelationFilter = {
  every?: InputMaybe<AccountWhereInput>;
  none?: InputMaybe<AccountWhereInput>;
  some?: InputMaybe<AccountWhereInput>;
};

export type AccountOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AccountOrderByWithRelationInput = {
  Family?: InputMaybe<FamilyOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  familyId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  monthlyBudget?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  sold?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum AccountScalarFieldEnum {
  CreatedAt = 'createdAt',
  FamilyId = 'familyId',
  Id = 'id',
  MonthlyBudget = 'monthlyBudget',
  Name = 'name',
  Sold = 'sold',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type AccountScalarWhereInput = {
  AND?: InputMaybe<Array<AccountScalarWhereInput>>;
  NOT?: InputMaybe<Array<AccountScalarWhereInput>>;
  OR?: InputMaybe<Array<AccountScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  familyId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  monthlyBudget?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  sold?: InputMaybe<IntFilter>;
  type?: InputMaybe<EnumAccountTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum AccountType {
  Expense = 'EXPENSE',
  Saving = 'SAVING'
}

export type AccountUpdateInput = {
  Family?: InputMaybe<FamilyUpdateOneWithoutAccountsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  monthlyBudget?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  sold?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumAccountTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AccountUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  monthlyBudget?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  sold?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumAccountTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AccountUpdateManyWithWhereWithoutFamilyInput = {
  data: AccountUpdateManyMutationInput;
  where: AccountScalarWhereInput;
};

export type AccountUpdateManyWithoutFamilyNestedInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutFamilyInput>>;
  create?: InputMaybe<Array<AccountCreateWithoutFamilyInput>>;
  createMany?: InputMaybe<AccountCreateManyFamilyInputEnvelope>;
  delete?: InputMaybe<Array<AccountWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AccountScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  set?: InputMaybe<Array<AccountWhereUniqueInput>>;
  update?: InputMaybe<Array<AccountUpdateWithWhereUniqueWithoutFamilyInput>>;
  updateMany?: InputMaybe<Array<AccountUpdateManyWithWhereWithoutFamilyInput>>;
  upsert?: InputMaybe<Array<AccountUpsertWithWhereUniqueWithoutFamilyInput>>;
};

export type AccountUpdateWithWhereUniqueWithoutFamilyInput = {
  data: AccountUpdateWithoutFamilyInput;
  where: AccountWhereUniqueInput;
};

export type AccountUpdateWithoutFamilyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  monthlyBudget?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  sold?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumAccountTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AccountUpsertWithWhereUniqueWithoutFamilyInput = {
  create: AccountCreateWithoutFamilyInput;
  update: AccountUpdateWithoutFamilyInput;
  where: AccountWhereUniqueInput;
};

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  Family?: InputMaybe<FamilyRelationFilter>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  familyId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  monthlyBudget?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  sold?: InputMaybe<IntFilter>;
  type?: InputMaybe<EnumAccountTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AccountWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type AuthInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  message?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type Detail = {
  __typename?: 'Detail';
  Expense?: Maybe<Expense>;
  createdAt: Scalars['DateTime'];
  expenseId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  monthlyCost: Scalars['Int'];
  period?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
};

export type DetailCreateInput = {
  Expense?: InputMaybe<ExpenseCreateNestedOneWithoutExpenseDetailsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  monthlyCost?: InputMaybe<Scalars['Int']>;
  period?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DetailCreateManyExpenseInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  monthlyCost?: InputMaybe<Scalars['Int']>;
  period?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DetailCreateManyExpenseInputEnvelope = {
  data: Array<DetailCreateManyExpenseInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type DetailCreateNestedManyWithoutExpenseInput = {
  connect?: InputMaybe<Array<DetailWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DetailCreateOrConnectWithoutExpenseInput>>;
  create?: InputMaybe<Array<DetailCreateWithoutExpenseInput>>;
  createMany?: InputMaybe<DetailCreateManyExpenseInputEnvelope>;
};

export type DetailCreateOrConnectWithoutExpenseInput = {
  create: DetailCreateWithoutExpenseInput;
  where: DetailWhereUniqueInput;
};

export type DetailCreateWithoutExpenseInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  monthlyCost?: InputMaybe<Scalars['Int']>;
  period?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DetailListRelationFilter = {
  every?: InputMaybe<DetailWhereInput>;
  none?: InputMaybe<DetailWhereInput>;
  some?: InputMaybe<DetailWhereInput>;
};

export type DetailOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type DetailOrderByWithRelationInput = {
  Expense?: InputMaybe<ExpenseOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  expenseId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  monthlyCost?: InputMaybe<SortOrder>;
  period?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum DetailScalarFieldEnum {
  CreatedAt = 'createdAt',
  ExpenseId = 'expenseId',
  Id = 'id',
  MonthlyCost = 'monthlyCost',
  Period = 'period',
  UpdatedAt = 'updatedAt'
}

export type DetailScalarWhereInput = {
  AND?: InputMaybe<Array<DetailScalarWhereInput>>;
  NOT?: InputMaybe<Array<DetailScalarWhereInput>>;
  OR?: InputMaybe<Array<DetailScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expenseId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  monthlyCost?: InputMaybe<IntFilter>;
  period?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type DetailUpdateInput = {
  Expense?: InputMaybe<ExpenseUpdateOneWithoutExpenseDetailsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  monthlyCost?: InputMaybe<IntFieldUpdateOperationsInput>;
  period?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type DetailUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  monthlyCost?: InputMaybe<IntFieldUpdateOperationsInput>;
  period?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type DetailUpdateManyWithWhereWithoutExpenseInput = {
  data: DetailUpdateManyMutationInput;
  where: DetailScalarWhereInput;
};

export type DetailUpdateManyWithoutExpenseNestedInput = {
  connect?: InputMaybe<Array<DetailWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DetailCreateOrConnectWithoutExpenseInput>>;
  create?: InputMaybe<Array<DetailCreateWithoutExpenseInput>>;
  createMany?: InputMaybe<DetailCreateManyExpenseInputEnvelope>;
  delete?: InputMaybe<Array<DetailWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<DetailScalarWhereInput>>;
  disconnect?: InputMaybe<Array<DetailWhereUniqueInput>>;
  set?: InputMaybe<Array<DetailWhereUniqueInput>>;
  update?: InputMaybe<Array<DetailUpdateWithWhereUniqueWithoutExpenseInput>>;
  updateMany?: InputMaybe<Array<DetailUpdateManyWithWhereWithoutExpenseInput>>;
  upsert?: InputMaybe<Array<DetailUpsertWithWhereUniqueWithoutExpenseInput>>;
};

export type DetailUpdateWithWhereUniqueWithoutExpenseInput = {
  data: DetailUpdateWithoutExpenseInput;
  where: DetailWhereUniqueInput;
};

export type DetailUpdateWithoutExpenseInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  monthlyCost?: InputMaybe<IntFieldUpdateOperationsInput>;
  period?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type DetailUpsertWithWhereUniqueWithoutExpenseInput = {
  create: DetailCreateWithoutExpenseInput;
  update: DetailUpdateWithoutExpenseInput;
  where: DetailWhereUniqueInput;
};

export type DetailWhereInput = {
  AND?: InputMaybe<Array<DetailWhereInput>>;
  Expense?: InputMaybe<ExpenseRelationFilter>;
  NOT?: InputMaybe<Array<DetailWhereInput>>;
  OR?: InputMaybe<Array<DetailWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expenseId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  monthlyCost?: InputMaybe<IntFilter>;
  period?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type DetailWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type EnumAccountTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<AccountType>;
};

export type EnumAccountTypeFilter = {
  equals?: InputMaybe<AccountType>;
  in?: InputMaybe<Array<AccountType>>;
  not?: InputMaybe<NestedEnumAccountTypeFilter>;
  notIn?: InputMaybe<Array<AccountType>>;
};

export type EnumRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<Role>;
};

export type EnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type EnumVerificationStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<VerificationStatus>;
};

export type EnumVerificationStatusFilter = {
  equals?: InputMaybe<VerificationStatus>;
  in?: InputMaybe<Array<VerificationStatus>>;
  not?: InputMaybe<NestedEnumVerificationStatusFilter>;
  notIn?: InputMaybe<Array<VerificationStatus>>;
};

export type Expense = {
  __typename?: 'Expense';
  Family?: Maybe<Family>;
  _count: ExpenseCount;
  createdAt: Scalars['DateTime'];
  expenseDetails?: Maybe<Array<Detail>>;
  familyId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  monthlyCost: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ExpenseCount = {
  __typename?: 'ExpenseCount';
  expenseDetails: Scalars['Int'];
};

export type ExpenseCreateInput = {
  Family?: InputMaybe<FamilyCreateNestedOneWithoutExpensesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expenseDetails?: InputMaybe<DetailCreateNestedManyWithoutExpenseInput>;
  id?: InputMaybe<Scalars['String']>;
  monthlyCost?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ExpenseCreateManyFamilyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  monthlyCost?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ExpenseCreateManyFamilyInputEnvelope = {
  data: Array<ExpenseCreateManyFamilyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ExpenseCreateNestedManyWithoutFamilyInput = {
  connect?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ExpenseCreateOrConnectWithoutFamilyInput>>;
  create?: InputMaybe<Array<ExpenseCreateWithoutFamilyInput>>;
  createMany?: InputMaybe<ExpenseCreateManyFamilyInputEnvelope>;
};

export type ExpenseCreateNestedOneWithoutExpenseDetailsInput = {
  connect?: InputMaybe<ExpenseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ExpenseCreateOrConnectWithoutExpenseDetailsInput>;
  create?: InputMaybe<ExpenseCreateWithoutExpenseDetailsInput>;
};

export type ExpenseCreateOrConnectWithoutExpenseDetailsInput = {
  create: ExpenseCreateWithoutExpenseDetailsInput;
  where: ExpenseWhereUniqueInput;
};

export type ExpenseCreateOrConnectWithoutFamilyInput = {
  create: ExpenseCreateWithoutFamilyInput;
  where: ExpenseWhereUniqueInput;
};

export type ExpenseCreateWithoutExpenseDetailsInput = {
  Family?: InputMaybe<FamilyCreateNestedOneWithoutExpensesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  monthlyCost?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ExpenseCreateWithoutFamilyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expenseDetails?: InputMaybe<DetailCreateNestedManyWithoutExpenseInput>;
  id?: InputMaybe<Scalars['String']>;
  monthlyCost?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ExpenseListRelationFilter = {
  every?: InputMaybe<ExpenseWhereInput>;
  none?: InputMaybe<ExpenseWhereInput>;
  some?: InputMaybe<ExpenseWhereInput>;
};

export type ExpenseOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ExpenseOrderByWithRelationInput = {
  Family?: InputMaybe<FamilyOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  expenseDetails?: InputMaybe<DetailOrderByRelationAggregateInput>;
  familyId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  monthlyCost?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ExpenseRelationFilter = {
  is?: InputMaybe<ExpenseWhereInput>;
  isNot?: InputMaybe<ExpenseWhereInput>;
};

export enum ExpenseScalarFieldEnum {
  CreatedAt = 'createdAt',
  FamilyId = 'familyId',
  Id = 'id',
  MonthlyCost = 'monthlyCost',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type ExpenseScalarWhereInput = {
  AND?: InputMaybe<Array<ExpenseScalarWhereInput>>;
  NOT?: InputMaybe<Array<ExpenseScalarWhereInput>>;
  OR?: InputMaybe<Array<ExpenseScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  familyId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  monthlyCost?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ExpenseUpdateInput = {
  Family?: InputMaybe<FamilyUpdateOneWithoutExpensesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expenseDetails?: InputMaybe<DetailUpdateManyWithoutExpenseNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  monthlyCost?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ExpenseUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  monthlyCost?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ExpenseUpdateManyWithWhereWithoutFamilyInput = {
  data: ExpenseUpdateManyMutationInput;
  where: ExpenseScalarWhereInput;
};

export type ExpenseUpdateManyWithoutFamilyNestedInput = {
  connect?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ExpenseCreateOrConnectWithoutFamilyInput>>;
  create?: InputMaybe<Array<ExpenseCreateWithoutFamilyInput>>;
  createMany?: InputMaybe<ExpenseCreateManyFamilyInputEnvelope>;
  delete?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ExpenseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  set?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  update?: InputMaybe<Array<ExpenseUpdateWithWhereUniqueWithoutFamilyInput>>;
  updateMany?: InputMaybe<Array<ExpenseUpdateManyWithWhereWithoutFamilyInput>>;
  upsert?: InputMaybe<Array<ExpenseUpsertWithWhereUniqueWithoutFamilyInput>>;
};

export type ExpenseUpdateOneWithoutExpenseDetailsNestedInput = {
  connect?: InputMaybe<ExpenseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ExpenseCreateOrConnectWithoutExpenseDetailsInput>;
  create?: InputMaybe<ExpenseCreateWithoutExpenseDetailsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ExpenseUpdateWithoutExpenseDetailsInput>;
  upsert?: InputMaybe<ExpenseUpsertWithoutExpenseDetailsInput>;
};

export type ExpenseUpdateWithWhereUniqueWithoutFamilyInput = {
  data: ExpenseUpdateWithoutFamilyInput;
  where: ExpenseWhereUniqueInput;
};

export type ExpenseUpdateWithoutExpenseDetailsInput = {
  Family?: InputMaybe<FamilyUpdateOneWithoutExpensesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  monthlyCost?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ExpenseUpdateWithoutFamilyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expenseDetails?: InputMaybe<DetailUpdateManyWithoutExpenseNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  monthlyCost?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ExpenseUpsertWithWhereUniqueWithoutFamilyInput = {
  create: ExpenseCreateWithoutFamilyInput;
  update: ExpenseUpdateWithoutFamilyInput;
  where: ExpenseWhereUniqueInput;
};

export type ExpenseUpsertWithoutExpenseDetailsInput = {
  create: ExpenseCreateWithoutExpenseDetailsInput;
  update: ExpenseUpdateWithoutExpenseDetailsInput;
};

export type ExpenseWhereInput = {
  AND?: InputMaybe<Array<ExpenseWhereInput>>;
  Family?: InputMaybe<FamilyRelationFilter>;
  NOT?: InputMaybe<Array<ExpenseWhereInput>>;
  OR?: InputMaybe<Array<ExpenseWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expenseDetails?: InputMaybe<DetailListRelationFilter>;
  familyId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  monthlyCost?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ExpenseWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Family = {
  __typename?: 'Family';
  _count: FamilyCount;
  accounts?: Maybe<Array<Account>>;
  createdAt: Scalars['DateTime'];
  expenses?: Maybe<Array<Expense>>;
  id: Scalars['ID'];
  members?: Maybe<Array<User>>;
  revenues?: Maybe<Array<Revenue>>;
  updatedAt: Scalars['DateTime'];
};

export type FamilyCount = {
  __typename?: 'FamilyCount';
  accounts: Scalars['Int'];
  expenses: Scalars['Int'];
  members: Scalars['Int'];
  revenues: Scalars['Int'];
};

export type FamilyCreateInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutFamilyInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expenses?: InputMaybe<ExpenseCreateNestedManyWithoutFamilyInput>;
  id?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<UserCreateNestedManyWithoutFamilyInput>;
  revenues?: InputMaybe<RevenueCreateNestedManyWithoutFamilyInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FamilyCreateNestedOneWithoutAccountsInput = {
  connect?: InputMaybe<FamilyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FamilyCreateOrConnectWithoutAccountsInput>;
  create?: InputMaybe<FamilyCreateWithoutAccountsInput>;
};

export type FamilyCreateNestedOneWithoutExpensesInput = {
  connect?: InputMaybe<FamilyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FamilyCreateOrConnectWithoutExpensesInput>;
  create?: InputMaybe<FamilyCreateWithoutExpensesInput>;
};

export type FamilyCreateNestedOneWithoutMembersInput = {
  connect?: InputMaybe<FamilyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FamilyCreateOrConnectWithoutMembersInput>;
  create?: InputMaybe<FamilyCreateWithoutMembersInput>;
};

export type FamilyCreateNestedOneWithoutRevenuesInput = {
  connect?: InputMaybe<FamilyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FamilyCreateOrConnectWithoutRevenuesInput>;
  create?: InputMaybe<FamilyCreateWithoutRevenuesInput>;
};

export type FamilyCreateOrConnectWithoutAccountsInput = {
  create: FamilyCreateWithoutAccountsInput;
  where: FamilyWhereUniqueInput;
};

export type FamilyCreateOrConnectWithoutExpensesInput = {
  create: FamilyCreateWithoutExpensesInput;
  where: FamilyWhereUniqueInput;
};

export type FamilyCreateOrConnectWithoutMembersInput = {
  create: FamilyCreateWithoutMembersInput;
  where: FamilyWhereUniqueInput;
};

export type FamilyCreateOrConnectWithoutRevenuesInput = {
  create: FamilyCreateWithoutRevenuesInput;
  where: FamilyWhereUniqueInput;
};

export type FamilyCreateWithoutAccountsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expenses?: InputMaybe<ExpenseCreateNestedManyWithoutFamilyInput>;
  id?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<UserCreateNestedManyWithoutFamilyInput>;
  revenues?: InputMaybe<RevenueCreateNestedManyWithoutFamilyInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FamilyCreateWithoutExpensesInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutFamilyInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<UserCreateNestedManyWithoutFamilyInput>;
  revenues?: InputMaybe<RevenueCreateNestedManyWithoutFamilyInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FamilyCreateWithoutMembersInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutFamilyInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expenses?: InputMaybe<ExpenseCreateNestedManyWithoutFamilyInput>;
  id?: InputMaybe<Scalars['String']>;
  revenues?: InputMaybe<RevenueCreateNestedManyWithoutFamilyInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FamilyCreateWithoutRevenuesInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutFamilyInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expenses?: InputMaybe<ExpenseCreateNestedManyWithoutFamilyInput>;
  id?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<UserCreateNestedManyWithoutFamilyInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FamilyOrderByWithRelationInput = {
  accounts?: InputMaybe<AccountOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  expenses?: InputMaybe<ExpenseOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  members?: InputMaybe<UserOrderByRelationAggregateInput>;
  revenues?: InputMaybe<RevenueOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FamilyRelationFilter = {
  is?: InputMaybe<FamilyWhereInput>;
  isNot?: InputMaybe<FamilyWhereInput>;
};

export enum FamilyScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt'
}

export type FamilyUpdateInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutFamilyNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expenses?: InputMaybe<ExpenseUpdateManyWithoutFamilyNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUpdateManyWithoutFamilyNestedInput>;
  revenues?: InputMaybe<RevenueUpdateManyWithoutFamilyNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FamilyUpdateOneRequiredWithoutRevenuesNestedInput = {
  connect?: InputMaybe<FamilyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FamilyCreateOrConnectWithoutRevenuesInput>;
  create?: InputMaybe<FamilyCreateWithoutRevenuesInput>;
  update?: InputMaybe<FamilyUpdateWithoutRevenuesInput>;
  upsert?: InputMaybe<FamilyUpsertWithoutRevenuesInput>;
};

export type FamilyUpdateOneWithoutAccountsNestedInput = {
  connect?: InputMaybe<FamilyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FamilyCreateOrConnectWithoutAccountsInput>;
  create?: InputMaybe<FamilyCreateWithoutAccountsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<FamilyUpdateWithoutAccountsInput>;
  upsert?: InputMaybe<FamilyUpsertWithoutAccountsInput>;
};

export type FamilyUpdateOneWithoutExpensesNestedInput = {
  connect?: InputMaybe<FamilyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FamilyCreateOrConnectWithoutExpensesInput>;
  create?: InputMaybe<FamilyCreateWithoutExpensesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<FamilyUpdateWithoutExpensesInput>;
  upsert?: InputMaybe<FamilyUpsertWithoutExpensesInput>;
};

export type FamilyUpdateOneWithoutMembersNestedInput = {
  connect?: InputMaybe<FamilyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FamilyCreateOrConnectWithoutMembersInput>;
  create?: InputMaybe<FamilyCreateWithoutMembersInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<FamilyUpdateWithoutMembersInput>;
  upsert?: InputMaybe<FamilyUpsertWithoutMembersInput>;
};

export type FamilyUpdateWithoutAccountsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expenses?: InputMaybe<ExpenseUpdateManyWithoutFamilyNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUpdateManyWithoutFamilyNestedInput>;
  revenues?: InputMaybe<RevenueUpdateManyWithoutFamilyNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FamilyUpdateWithoutExpensesInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutFamilyNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUpdateManyWithoutFamilyNestedInput>;
  revenues?: InputMaybe<RevenueUpdateManyWithoutFamilyNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FamilyUpdateWithoutMembersInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutFamilyNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expenses?: InputMaybe<ExpenseUpdateManyWithoutFamilyNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  revenues?: InputMaybe<RevenueUpdateManyWithoutFamilyNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FamilyUpdateWithoutRevenuesInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutFamilyNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expenses?: InputMaybe<ExpenseUpdateManyWithoutFamilyNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUpdateManyWithoutFamilyNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FamilyUpsertWithoutAccountsInput = {
  create: FamilyCreateWithoutAccountsInput;
  update: FamilyUpdateWithoutAccountsInput;
};

export type FamilyUpsertWithoutExpensesInput = {
  create: FamilyCreateWithoutExpensesInput;
  update: FamilyUpdateWithoutExpensesInput;
};

export type FamilyUpsertWithoutMembersInput = {
  create: FamilyCreateWithoutMembersInput;
  update: FamilyUpdateWithoutMembersInput;
};

export type FamilyUpsertWithoutRevenuesInput = {
  create: FamilyCreateWithoutRevenuesInput;
  update: FamilyUpdateWithoutRevenuesInput;
};

export type FamilyWhereInput = {
  AND?: InputMaybe<Array<FamilyWhereInput>>;
  NOT?: InputMaybe<Array<FamilyWhereInput>>;
  OR?: InputMaybe<Array<FamilyWhereInput>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expenses?: InputMaybe<ExpenseListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  members?: InputMaybe<UserListRelationFilter>;
  revenues?: InputMaybe<RevenueListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type FamilyWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: Account;
  createDetail: Detail;
  createExpense: Expense;
  createFamily: Family;
  createPermission: Permission;
  createRevenue: Revenue;
  createUser: User;
  login: AuthResponse;
  logout?: Maybe<AuthResponse>;
  removeAccount: Account;
  removeDetail: Detail;
  removeExpense: Expense;
  removeFamily: Family;
  removePermission: Permission;
  removeRevenue: Revenue;
  removeUser: User;
  updateAccount: Account;
  updateAccountUser: Account;
  updateDetail: Detail;
  updateExpense: Expense;
  updateFamily: Family;
  updatePermission: Permission;
  updateRevenue: Revenue;
  updateUser: User;
};


export type MutationCreateAccountArgs = {
  createAccountInput: AccountCreateInput;
};


export type MutationCreateDetailArgs = {
  createDetailInput: DetailCreateInput;
};


export type MutationCreateExpenseArgs = {
  createExpenseInput: ExpenseCreateInput;
};


export type MutationCreateFamilyArgs = {
  createFamilyInput: FamilyCreateInput;
};


export type MutationCreatePermissionArgs = {
  createPermissionInput: PermissionCreateInput;
};


export type MutationCreateRevenueArgs = {
  createRevenueInput: RevenueCreateInput;
};


export type MutationCreateUserArgs = {
  createUserInput: UserCreateInput;
};


export type MutationLoginArgs = {
  authInput: AuthInput;
};


export type MutationRemoveAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type MutationRemoveDetailArgs = {
  where: DetailWhereUniqueInput;
};


export type MutationRemoveExpenseArgs = {
  where: ExpenseWhereUniqueInput;
};


export type MutationRemoveFamilyArgs = {
  where: FamilyWhereUniqueInput;
};


export type MutationRemovePermissionArgs = {
  where: PermissionWhereUniqueInput;
};


export type MutationRemoveRevenueArgs = {
  where: RevenueWhereUniqueInput;
};


export type MutationRemoveUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateAccountArgs = {
  updateAccountInput: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};


export type MutationUpdateAccountUserArgs = {
  updateAccountInput: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};


export type MutationUpdateDetailArgs = {
  updateDetailInput: DetailUpdateInput;
  where: DetailWhereUniqueInput;
};


export type MutationUpdateExpenseArgs = {
  updateExpenseInput: ExpenseUpdateInput;
  where: ExpenseWhereUniqueInput;
};


export type MutationUpdateFamilyArgs = {
  updateFamilyInput: FamilyUpdateInput;
  where: FamilyWhereUniqueInput;
};


export type MutationUpdatePermissionArgs = {
  updatePermissionInput: PermissionUpdateInput;
  where: PermissionWhereUniqueInput;
};


export type MutationUpdateRevenueArgs = {
  updateRevenueInput: RevenueUpdateInput;
  where: RevenueWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumAccountTypeFilter = {
  equals?: InputMaybe<AccountType>;
  in?: InputMaybe<Array<AccountType>>;
  not?: InputMaybe<NestedEnumAccountTypeFilter>;
  notIn?: InputMaybe<Array<AccountType>>;
};

export type NestedEnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedEnumVerificationStatusFilter = {
  equals?: InputMaybe<VerificationStatus>;
  in?: InputMaybe<Array<VerificationStatus>>;
  not?: InputMaybe<NestedEnumVerificationStatusFilter>;
  notIn?: InputMaybe<Array<VerificationStatus>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Permission = {
  __typename?: 'Permission';
  User?: Maybe<User>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  type: Role;
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type PermissionCreateInput = {
  User?: InputMaybe<UserCreateNestedOneWithoutPermissionInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  type: Role;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PermissionCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<PermissionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PermissionCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<PermissionCreateWithoutUserInput>;
};

export type PermissionCreateOrConnectWithoutUserInput = {
  create: PermissionCreateWithoutUserInput;
  where: PermissionWhereUniqueInput;
};

export type PermissionCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  type: Role;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PermissionOrderByWithRelationInput = {
  User?: InputMaybe<UserOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PermissionRelationFilter = {
  is?: InputMaybe<PermissionWhereInput>;
  isNot?: InputMaybe<PermissionWhereInput>;
};

export enum PermissionScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type PermissionUpdateInput = {
  User?: InputMaybe<UserUpdateOneWithoutPermissionNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PermissionUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<PermissionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PermissionCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<PermissionCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<PermissionUpdateWithoutUserInput>;
  upsert?: InputMaybe<PermissionUpsertWithoutUserInput>;
};

export type PermissionUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PermissionUpsertWithoutUserInput = {
  create: PermissionCreateWithoutUserInput;
  update: PermissionUpdateWithoutUserInput;
};

export type PermissionWhereInput = {
  AND?: InputMaybe<Array<PermissionWhereInput>>;
  NOT?: InputMaybe<Array<PermissionWhereInput>>;
  OR?: InputMaybe<Array<PermissionWhereInput>>;
  User?: InputMaybe<UserRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumRoleFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type PermissionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  accountUser?: Maybe<Account>;
  accounts: Array<Account>;
  accountsUser: Array<Account>;
  detail?: Maybe<Detail>;
  details: Array<Detail>;
  expense?: Maybe<Expense>;
  expenses: Array<Expense>;
  family?: Maybe<Family>;
  familys: Array<Family>;
  permission?: Maybe<Permission>;
  permissions: Array<Permission>;
  revenue?: Maybe<Revenue>;
  revenues: Array<Revenue>;
  user?: Maybe<User>;
  users: Array<User>;
  whoAmI?: Maybe<User>;
};


export type QueryAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type QueryAccountUserArgs = {
  where: AccountWhereUniqueInput;
};


export type QueryAccountsArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryDetailArgs = {
  where: DetailWhereUniqueInput;
};


export type QueryDetailsArgs = {
  cursor?: InputMaybe<DetailWhereUniqueInput>;
  distinct?: InputMaybe<Array<DetailScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DetailOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DetailWhereInput>;
};


export type QueryExpenseArgs = {
  where: ExpenseWhereUniqueInput;
};


export type QueryExpensesArgs = {
  cursor?: InputMaybe<ExpenseWhereUniqueInput>;
  distinct?: InputMaybe<Array<ExpenseScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ExpenseOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ExpenseWhereInput>;
};


export type QueryFamilyArgs = {
  where: FamilyWhereUniqueInput;
};


export type QueryFamilysArgs = {
  cursor?: InputMaybe<FamilyWhereUniqueInput>;
  distinct?: InputMaybe<Array<FamilyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FamilyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FamilyWhereInput>;
};


export type QueryPermissionArgs = {
  where: PermissionWhereUniqueInput;
};


export type QueryPermissionsArgs = {
  cursor?: InputMaybe<PermissionWhereUniqueInput>;
  distinct?: InputMaybe<Array<PermissionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PermissionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PermissionWhereInput>;
};


export type QueryRevenueArgs = {
  where: RevenueWhereUniqueInput;
};


export type QueryRevenuesArgs = {
  cursor?: InputMaybe<RevenueWhereUniqueInput>;
  distinct?: InputMaybe<Array<RevenueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RevenueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RevenueWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Revenue = {
  __typename?: 'Revenue';
  Family: Family;
  User: User;
  createdAt: Scalars['DateTime'];
  familyId: Scalars['String'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type RevenueCreateInput = {
  Family: FamilyCreateNestedOneWithoutRevenuesInput;
  User: UserCreateNestedOneWithoutRevenueInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RevenueCreateManyFamilyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type RevenueCreateManyFamilyInputEnvelope = {
  data: Array<RevenueCreateManyFamilyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type RevenueCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  familyId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RevenueCreateManyUserInputEnvelope = {
  data: Array<RevenueCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type RevenueCreateNestedManyWithoutFamilyInput = {
  connect?: InputMaybe<Array<RevenueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RevenueCreateOrConnectWithoutFamilyInput>>;
  create?: InputMaybe<Array<RevenueCreateWithoutFamilyInput>>;
  createMany?: InputMaybe<RevenueCreateManyFamilyInputEnvelope>;
};

export type RevenueCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<RevenueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RevenueCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<RevenueCreateWithoutUserInput>>;
  createMany?: InputMaybe<RevenueCreateManyUserInputEnvelope>;
};

export type RevenueCreateOrConnectWithoutFamilyInput = {
  create: RevenueCreateWithoutFamilyInput;
  where: RevenueWhereUniqueInput;
};

export type RevenueCreateOrConnectWithoutUserInput = {
  create: RevenueCreateWithoutUserInput;
  where: RevenueWhereUniqueInput;
};

export type RevenueCreateWithoutFamilyInput = {
  User: UserCreateNestedOneWithoutRevenueInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RevenueCreateWithoutUserInput = {
  Family: FamilyCreateNestedOneWithoutRevenuesInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RevenueListRelationFilter = {
  every?: InputMaybe<RevenueWhereInput>;
  none?: InputMaybe<RevenueWhereInput>;
  some?: InputMaybe<RevenueWhereInput>;
};

export type RevenueOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RevenueOrderByWithRelationInput = {
  Family?: InputMaybe<FamilyOrderByWithRelationInput>;
  User?: InputMaybe<UserOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  familyId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export enum RevenueScalarFieldEnum {
  CreatedAt = 'createdAt',
  FamilyId = 'familyId',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type RevenueScalarWhereInput = {
  AND?: InputMaybe<Array<RevenueScalarWhereInput>>;
  NOT?: InputMaybe<Array<RevenueScalarWhereInput>>;
  OR?: InputMaybe<Array<RevenueScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  familyId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type RevenueUpdateInput = {
  Family?: InputMaybe<FamilyUpdateOneRequiredWithoutRevenuesNestedInput>;
  User?: InputMaybe<UserUpdateOneRequiredWithoutRevenueNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RevenueUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RevenueUpdateManyWithWhereWithoutFamilyInput = {
  data: RevenueUpdateManyMutationInput;
  where: RevenueScalarWhereInput;
};

export type RevenueUpdateManyWithWhereWithoutUserInput = {
  data: RevenueUpdateManyMutationInput;
  where: RevenueScalarWhereInput;
};

export type RevenueUpdateManyWithoutFamilyNestedInput = {
  connect?: InputMaybe<Array<RevenueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RevenueCreateOrConnectWithoutFamilyInput>>;
  create?: InputMaybe<Array<RevenueCreateWithoutFamilyInput>>;
  createMany?: InputMaybe<RevenueCreateManyFamilyInputEnvelope>;
  delete?: InputMaybe<Array<RevenueWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RevenueScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RevenueWhereUniqueInput>>;
  set?: InputMaybe<Array<RevenueWhereUniqueInput>>;
  update?: InputMaybe<Array<RevenueUpdateWithWhereUniqueWithoutFamilyInput>>;
  updateMany?: InputMaybe<Array<RevenueUpdateManyWithWhereWithoutFamilyInput>>;
  upsert?: InputMaybe<Array<RevenueUpsertWithWhereUniqueWithoutFamilyInput>>;
};

export type RevenueUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<RevenueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RevenueCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<RevenueCreateWithoutUserInput>>;
  createMany?: InputMaybe<RevenueCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<RevenueWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RevenueScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RevenueWhereUniqueInput>>;
  set?: InputMaybe<Array<RevenueWhereUniqueInput>>;
  update?: InputMaybe<Array<RevenueUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<RevenueUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<RevenueUpsertWithWhereUniqueWithoutUserInput>>;
};

export type RevenueUpdateWithWhereUniqueWithoutFamilyInput = {
  data: RevenueUpdateWithoutFamilyInput;
  where: RevenueWhereUniqueInput;
};

export type RevenueUpdateWithWhereUniqueWithoutUserInput = {
  data: RevenueUpdateWithoutUserInput;
  where: RevenueWhereUniqueInput;
};

export type RevenueUpdateWithoutFamilyInput = {
  User?: InputMaybe<UserUpdateOneRequiredWithoutRevenueNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RevenueUpdateWithoutUserInput = {
  Family?: InputMaybe<FamilyUpdateOneRequiredWithoutRevenuesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RevenueUpsertWithWhereUniqueWithoutFamilyInput = {
  create: RevenueCreateWithoutFamilyInput;
  update: RevenueUpdateWithoutFamilyInput;
  where: RevenueWhereUniqueInput;
};

export type RevenueUpsertWithWhereUniqueWithoutUserInput = {
  create: RevenueCreateWithoutUserInput;
  update: RevenueUpdateWithoutUserInput;
  where: RevenueWhereUniqueInput;
};

export type RevenueWhereInput = {
  AND?: InputMaybe<Array<RevenueWhereInput>>;
  Family?: InputMaybe<FamilyRelationFilter>;
  NOT?: InputMaybe<Array<RevenueWhereInput>>;
  OR?: InputMaybe<Array<RevenueWhereInput>>;
  User?: InputMaybe<UserRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  familyId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type RevenueWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  Family?: Maybe<Family>;
  Permission?: Maybe<Permission>;
  Revenue?: Maybe<Array<Revenue>>;
  _count: UserCount;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  familyId?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  validationToken: Scalars['String'];
  verificationStatus: VerificationStatus;
};

export type UserCount = {
  __typename?: 'UserCount';
  Revenue: Scalars['Int'];
};

export type UserCreateInput = {
  Family?: InputMaybe<FamilyCreateNestedOneWithoutMembersInput>;
  Permission?: InputMaybe<PermissionCreateNestedOneWithoutUserInput>;
  Revenue?: InputMaybe<RevenueCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  lastLogin?: InputMaybe<Scalars['DateTime']>;
  lastName: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  validationToken: Scalars['String'];
  verificationStatus?: InputMaybe<VerificationStatus>;
};

export type UserCreateManyFamilyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  lastLogin?: InputMaybe<Scalars['DateTime']>;
  lastName: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  validationToken: Scalars['String'];
  verificationStatus?: InputMaybe<VerificationStatus>;
};

export type UserCreateManyFamilyInputEnvelope = {
  data: Array<UserCreateManyFamilyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserCreateNestedManyWithoutFamilyInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutFamilyInput>>;
  create?: InputMaybe<Array<UserCreateWithoutFamilyInput>>;
  createMany?: InputMaybe<UserCreateManyFamilyInputEnvelope>;
};

export type UserCreateNestedOneWithoutPermissionInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPermissionInput>;
  create?: InputMaybe<UserCreateWithoutPermissionInput>;
};

export type UserCreateNestedOneWithoutRevenueInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRevenueInput>;
  create?: InputMaybe<UserCreateWithoutRevenueInput>;
};

export type UserCreateOrConnectWithoutFamilyInput = {
  create: UserCreateWithoutFamilyInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPermissionInput = {
  create: UserCreateWithoutPermissionInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutRevenueInput = {
  create: UserCreateWithoutRevenueInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutFamilyInput = {
  Permission?: InputMaybe<PermissionCreateNestedOneWithoutUserInput>;
  Revenue?: InputMaybe<RevenueCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  lastLogin?: InputMaybe<Scalars['DateTime']>;
  lastName: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  validationToken: Scalars['String'];
  verificationStatus?: InputMaybe<VerificationStatus>;
};

export type UserCreateWithoutPermissionInput = {
  Family?: InputMaybe<FamilyCreateNestedOneWithoutMembersInput>;
  Revenue?: InputMaybe<RevenueCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  lastLogin?: InputMaybe<Scalars['DateTime']>;
  lastName: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  validationToken: Scalars['String'];
  verificationStatus?: InputMaybe<VerificationStatus>;
};

export type UserCreateWithoutRevenueInput = {
  Family?: InputMaybe<FamilyCreateNestedOneWithoutMembersInput>;
  Permission?: InputMaybe<PermissionCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  lastLogin?: InputMaybe<Scalars['DateTime']>;
  lastName: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  validationToken: Scalars['String'];
  verificationStatus?: InputMaybe<VerificationStatus>;
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  Family?: InputMaybe<FamilyOrderByWithRelationInput>;
  Permission?: InputMaybe<PermissionOrderByWithRelationInput>;
  Revenue?: InputMaybe<RevenueOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  familyId?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastLogin?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  validationToken?: InputMaybe<SortOrder>;
  verificationStatus?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  FamilyId = 'familyId',
  FirstName = 'firstName',
  Id = 'id',
  LastLogin = 'lastLogin',
  LastName = 'lastName',
  Password = 'password',
  UpdatedAt = 'updatedAt',
  ValidationToken = 'validationToken',
  VerificationStatus = 'verificationStatus'
}

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<UserScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereInput>>;
  OR?: InputMaybe<Array<UserScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  familyId?: InputMaybe<StringNullableFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lastLogin?: InputMaybe<DateTimeNullableFilter>;
  lastName?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  validationToken?: InputMaybe<StringFilter>;
  verificationStatus?: InputMaybe<EnumVerificationStatusFilter>;
};

export type UserUpdateInput = {
  Family?: InputMaybe<FamilyUpdateOneWithoutMembersNestedInput>;
  Permission?: InputMaybe<PermissionUpdateOneWithoutUserNestedInput>;
  Revenue?: InputMaybe<RevenueUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastLogin?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  validationToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  verificationStatus?: InputMaybe<EnumVerificationStatusFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastLogin?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  validationToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  verificationStatus?: InputMaybe<EnumVerificationStatusFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutFamilyInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutFamilyNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutFamilyInput>>;
  create?: InputMaybe<Array<UserCreateWithoutFamilyInput>>;
  createMany?: InputMaybe<UserCreateManyFamilyInputEnvelope>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutFamilyInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutFamilyInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutFamilyInput>>;
};

export type UserUpdateOneRequiredWithoutRevenueNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRevenueInput>;
  create?: InputMaybe<UserCreateWithoutRevenueInput>;
  update?: InputMaybe<UserUpdateWithoutRevenueInput>;
  upsert?: InputMaybe<UserUpsertWithoutRevenueInput>;
};

export type UserUpdateOneWithoutPermissionNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPermissionInput>;
  create?: InputMaybe<UserCreateWithoutPermissionInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutPermissionInput>;
  upsert?: InputMaybe<UserUpsertWithoutPermissionInput>;
};

export type UserUpdateWithWhereUniqueWithoutFamilyInput = {
  data: UserUpdateWithoutFamilyInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutFamilyInput = {
  Permission?: InputMaybe<PermissionUpdateOneWithoutUserNestedInput>;
  Revenue?: InputMaybe<RevenueUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastLogin?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  validationToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  verificationStatus?: InputMaybe<EnumVerificationStatusFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutPermissionInput = {
  Family?: InputMaybe<FamilyUpdateOneWithoutMembersNestedInput>;
  Revenue?: InputMaybe<RevenueUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastLogin?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  validationToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  verificationStatus?: InputMaybe<EnumVerificationStatusFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutRevenueInput = {
  Family?: InputMaybe<FamilyUpdateOneWithoutMembersNestedInput>;
  Permission?: InputMaybe<PermissionUpdateOneWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastLogin?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  validationToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  verificationStatus?: InputMaybe<EnumVerificationStatusFieldUpdateOperationsInput>;
};

export type UserUpsertWithWhereUniqueWithoutFamilyInput = {
  create: UserCreateWithoutFamilyInput;
  update: UserUpdateWithoutFamilyInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutPermissionInput = {
  create: UserCreateWithoutPermissionInput;
  update: UserUpdateWithoutPermissionInput;
};

export type UserUpsertWithoutRevenueInput = {
  create: UserCreateWithoutRevenueInput;
  update: UserUpdateWithoutRevenueInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  Family?: InputMaybe<FamilyRelationFilter>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  Permission?: InputMaybe<PermissionRelationFilter>;
  Revenue?: InputMaybe<RevenueListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  familyId?: InputMaybe<StringNullableFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lastLogin?: InputMaybe<DateTimeNullableFilter>;
  lastName?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  validationToken?: InputMaybe<StringFilter>;
  verificationStatus?: InputMaybe<EnumVerificationStatusFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export enum VerificationStatus {
  NotVerified = 'NOT_VERIFIED',
  Pending = 'PENDING',
  Verified = 'VERIFIED'
}

export type LoginMutationVariables = Exact<{
  authInput: AuthInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthResponse', message?: string | null, user?: { __typename?: 'User', id: string, email: string, Permission?: { __typename?: 'Permission', type: Role } | null } | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout?: { __typename?: 'AuthResponse', message?: string | null, user?: { __typename?: 'User', id: string, Permission?: { __typename?: 'Permission', type: Role } | null } | null } | null };

export type UserAccountsQueryVariables = Exact<{ [key: string]: never; }>;


export type UserAccountsQuery = { __typename?: 'Query', accountsUser: Array<{ __typename?: 'Account', name: string, type: AccountType }> };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string }> };


export const LoginDocument = gql`
    mutation Login($authInput: AuthInput!) {
  login(authInput: $authInput) {
    user {
      id
      email
      Permission {
        type
      }
    }
    message
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      authInput: // value for 'authInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout {
    user {
      id
      Permission {
        type
      }
    }
    message
  }
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const UserAccountsDocument = gql`
    query UserAccounts {
  accountsUser {
    name
    type
  }
}
    `;

/**
 * __useUserAccountsQuery__
 *
 * To run a query within a React component, call `useUserAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserAccountsQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserAccountsQuery(baseOptions?: Apollo.QueryHookOptions<UserAccountsQuery, UserAccountsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserAccountsQuery, UserAccountsQueryVariables>(UserAccountsDocument, options);
      }
export function useUserAccountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserAccountsQuery, UserAccountsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserAccountsQuery, UserAccountsQueryVariables>(UserAccountsDocument, options);
        }
export type UserAccountsQueryHookResult = ReturnType<typeof useUserAccountsQuery>;
export type UserAccountsLazyQueryHookResult = ReturnType<typeof useUserAccountsLazyQuery>;
export type UserAccountsQueryResult = Apollo.QueryResult<UserAccountsQuery, UserAccountsQueryVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    id
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;