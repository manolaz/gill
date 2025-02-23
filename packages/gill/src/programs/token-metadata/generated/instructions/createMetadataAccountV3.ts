/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  combineCodec,
  getBooleanDecoder,
  getBooleanEncoder,
  getOptionDecoder,
  getOptionEncoder,
  getStructDecoder,
  getStructEncoder,
  getU8Decoder,
  getU8Encoder,
  ReadonlyUint8Array,
  transformEncoder,
  type Codec,
  type Decoder,
  type Encoder,
  type Option,
  type OptionOrNullable,
} from "@solana/codecs";
import { type Address } from "@solana/addresses";
import type {
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  ReadonlySignerAccount,
  WritableAccount,
  WritableSignerAccount,
  IAccountMeta,
} from "@solana/instructions";
import { type IAccountSignerMeta, type TransactionSigner } from "@solana/signers";

import { getAccountMetaFactory, type ResolvedAccount } from "../../../shared";
import {
  getCollectionDetailsDecoder,
  getCollectionDetailsEncoder,
  getDataV2Decoder,
  getDataV2Encoder,
  type CollectionDetails,
  type CollectionDetailsArgs,
  type DataV2,
  type DataV2Args,
} from "../types";

export const CREATE_METADATA_ACCOUNT_V3_DISCRIMINATOR = 33;

export const TOKEN_METADATA_PROGRAM_ADDRESS =
  "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s" as Address<"metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s">;

export function getCreateMetadataAccountV3DiscriminatorBytes(): ReadonlyUint8Array {
  return getU8Encoder().encode(CREATE_METADATA_ACCOUNT_V3_DISCRIMINATOR);
}

export type CreateMetadataAccountV3Instruction<
  TProgram extends string = typeof TOKEN_METADATA_PROGRAM_ADDRESS,
  TAccountMetadata extends string | IAccountMeta<string> = string,
  TAccountMint extends string | IAccountMeta<string> = string,
  TAccountMintAuthority extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountUpdateAuthority extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends string | IAccountMeta<string> = "11111111111111111111111111111111",
  TAccountRent extends string | IAccountMeta<string> | undefined = undefined,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountMetadata extends string ? WritableAccount<TAccountMetadata> : TAccountMetadata,
      TAccountMint extends string ? ReadonlyAccount<TAccountMint> : TAccountMint,
      TAccountMintAuthority extends string
        ? ReadonlySignerAccount<TAccountMintAuthority> & IAccountSignerMeta<TAccountMintAuthority>
        : TAccountMintAuthority,
      TAccountPayer extends string
        ? WritableSignerAccount<TAccountPayer> & IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountUpdateAuthority extends string
        ? ReadonlyAccount<TAccountUpdateAuthority>
        : TAccountUpdateAuthority,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...(TAccountRent extends undefined
        ? []
        : [TAccountRent extends string ? ReadonlyAccount<TAccountRent> : TAccountRent]),
      ...TRemainingAccounts,
    ]
  >;

export type CreateMetadataAccountV3InstructionData = {
  discriminator: number;
  data: DataV2;
  isMutable: boolean;
  collectionDetails: Option<CollectionDetails>;
};

export type CreateMetadataAccountV3InstructionDataArgs = {
  data: DataV2Args;
  isMutable: boolean;
  collectionDetails: OptionOrNullable<CollectionDetailsArgs>;
};

export function getCreateMetadataAccountV3InstructionDataEncoder(): Encoder<CreateMetadataAccountV3InstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ["discriminator", getU8Encoder()],
      ["data", getDataV2Encoder()],
      ["isMutable", getBooleanEncoder()],
      ["collectionDetails", getOptionEncoder(getCollectionDetailsEncoder())],
    ]),
    (value) => ({
      ...value,
      discriminator: CREATE_METADATA_ACCOUNT_V3_DISCRIMINATOR,
    }),
  );
}

export function getCreateMetadataAccountV3InstructionDataDecoder(): Decoder<CreateMetadataAccountV3InstructionData> {
  return getStructDecoder([
    ["discriminator", getU8Decoder()],
    ["data", getDataV2Decoder()],
    ["isMutable", getBooleanDecoder()],
    ["collectionDetails", getOptionDecoder(getCollectionDetailsDecoder())],
  ]);
}

export function getCreateMetadataAccountV3InstructionDataCodec(): Codec<
  CreateMetadataAccountV3InstructionDataArgs,
  CreateMetadataAccountV3InstructionData
> {
  return combineCodec(
    getCreateMetadataAccountV3InstructionDataEncoder(),
    getCreateMetadataAccountV3InstructionDataDecoder(),
  );
}

export type CreateMetadataAccountV3Input<
  TAccountMetadata extends string = string,
  TAccountMint extends string = string,
  TAccountMintAuthority extends string = string,
  TAccountPayer extends string = string,
  TAccountUpdateAuthority extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountRent extends string = string,
> = {
  /** Metadata key (pda of ['metadata', program id, mint id]) */
  metadata: Address<TAccountMetadata>;
  /** Mint of token asset */
  mint: Address<TAccountMint>;
  /** Mint authority */
  mintAuthority: TransactionSigner<TAccountMintAuthority>;
  /** payer */
  payer: TransactionSigner<TAccountPayer>;
  /** update authority info */
  updateAuthority: Address<TAccountUpdateAuthority> | TransactionSigner<TAccountUpdateAuthority>;
  /** System program */
  systemProgram?: Address<TAccountSystemProgram>;
  /** Rent info */
  rent?: Address<TAccountRent>;
  data: CreateMetadataAccountV3InstructionDataArgs["data"];
  isMutable: CreateMetadataAccountV3InstructionDataArgs["isMutable"];
  collectionDetails: CreateMetadataAccountV3InstructionDataArgs["collectionDetails"];
};

export function getCreateMetadataAccountV3Instruction<
  TAccountMetadata extends string,
  TAccountMint extends string,
  TAccountMintAuthority extends string,
  TAccountPayer extends string,
  TAccountUpdateAuthority extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TProgramAddress extends Address = typeof TOKEN_METADATA_PROGRAM_ADDRESS,
>(
  input: CreateMetadataAccountV3Input<
    TAccountMetadata,
    TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountRent
  >,
  config?: { programAddress?: TProgramAddress },
): CreateMetadataAccountV3Instruction<
  TProgramAddress,
  TAccountMetadata,
  TAccountMint,
  TAccountMintAuthority,
  TAccountPayer,
  (typeof input)["updateAuthority"] extends TransactionSigner<TAccountUpdateAuthority>
    ? ReadonlySignerAccount<TAccountUpdateAuthority> & IAccountSignerMeta<TAccountUpdateAuthority>
    : TAccountUpdateAuthority,
  TAccountSystemProgram,
  TAccountRent
> {
  // Program address.
  const programAddress = config?.programAddress ?? TOKEN_METADATA_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    metadata: { value: input.metadata ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: false },
    mintAuthority: { value: input.mintAuthority ?? null, isWritable: false },
    payer: { value: input.payer ?? null, isWritable: true },
    updateAuthority: {
      value: input.updateAuthority ?? null,
      isWritable: false,
    },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    rent: { value: input.rent ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<keyof typeof originalAccounts, ResolvedAccount>;

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      "11111111111111111111111111111111" as Address<"11111111111111111111111111111111">;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, "omitted");
  const instruction = {
    accounts: [
      getAccountMeta(accounts.metadata),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.mintAuthority),
      getAccountMeta(accounts.payer),
      getAccountMeta(accounts.updateAuthority),
      getAccountMeta(accounts.systemProgram),
      getAccountMeta(accounts.rent),
    ].filter(<T>(x: T | undefined): x is T => x !== undefined),
    programAddress,
    data: getCreateMetadataAccountV3InstructionDataEncoder().encode(
      args as CreateMetadataAccountV3InstructionDataArgs,
    ),
  } as CreateMetadataAccountV3Instruction<
    TProgramAddress,
    TAccountMetadata,
    TAccountMint,
    TAccountMintAuthority,
    TAccountPayer,
    (typeof input)["updateAuthority"] extends TransactionSigner<TAccountUpdateAuthority>
      ? ReadonlySignerAccount<TAccountUpdateAuthority> & IAccountSignerMeta<TAccountUpdateAuthority>
      : TAccountUpdateAuthority,
    TAccountSystemProgram,
    TAccountRent
  >;

  return instruction;
}

export type ParsedCreateMetadataAccountV3Instruction<
  TProgram extends string = typeof TOKEN_METADATA_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Metadata key (pda of ['metadata', program id, mint id]) */
    metadata: TAccountMetas[0];
    /** Mint of token asset */
    mint: TAccountMetas[1];
    /** Mint authority */
    mintAuthority: TAccountMetas[2];
    /** payer */
    payer: TAccountMetas[3];
    /** update authority info */
    updateAuthority: TAccountMetas[4];
    /** System program */
    systemProgram: TAccountMetas[5];
    /** Rent info */
    rent?: TAccountMetas[6] | undefined;
  };
  data: CreateMetadataAccountV3InstructionData;
};

export function parseCreateMetadataAccountV3Instruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>,
): ParsedCreateMetadataAccountV3Instruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 6) {
    // TODO: Coded error.
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  let optionalAccountsRemaining = instruction.accounts.length - 6;
  const getNextOptionalAccount = () => {
    if (optionalAccountsRemaining === 0) return undefined;
    optionalAccountsRemaining -= 1;
    return getNextAccount();
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      metadata: getNextAccount(),
      mint: getNextAccount(),
      mintAuthority: getNextAccount(),
      payer: getNextAccount(),
      updateAuthority: getNextAccount(),
      systemProgram: getNextAccount(),
      rent: getNextOptionalAccount(),
    },
    data: getCreateMetadataAccountV3InstructionDataDecoder().decode(instruction.data),
  };
}
