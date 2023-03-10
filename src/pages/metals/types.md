---
layout: ../../layouts/Layout.astro
title: Types
description: TBD
section: METALS
order: 2	
---

This is a list of types supported by the META Intermediate Language.

This documents outlines all base types that are implemented in the [stdlib](../stdlib) of META and which can be used to define any other arbitrary type.

##  Base Types

| HEX | Type | Description |
| --- | --- | --- |
| 0x00 | `null` | Non mathematic descriptor of a variable being **undefined** (intentional absence of any value), will produce **NaN** when used in a mathematic context. |
| 0x0A | `undefined` | Unintentional absence of a value, e.g. when trying to refer to a non-defined variable. |
| 0x0B | `NaN` - **N**ot **a** **N**umber | The result of trying to execute a binary operation on a type of **number** with a **non number** type.  |

## Number Types

| HEX | Type | Description |
| --- | --- | --- |
| 0x0C | `int8` | 8 bit signed integer |
| 0x0D | `int16` | 16 bit signed integer |
| 0x0E | `int32` | 32 bit signed integer |
| 0x0F | `int64` | 64 bit signed integer |
| 0x0C | `uint8` | 8 bit unsigned integer |
| 0x0D | `uint16` | 16 bit unsigned integer |
| 0x0E | `uint32` | 32 bit unsigned integer |
| 0x0F | `uint64` | 64 bit unsigned integer |
| 0x0C | `int8` | 8 bit signed integer |
| 0x0D | `int16` | 16 bit signed integer |
| 0x0E | `int32` | 32 bit signed integer |
| 0x0F | `int64` | 64 bit signed integer |
| 0x0C | `uint8` | 8 bit unsigned integer |
| 0x0D | `uint16` | 16 bit unsigned integer |
| 0x0E | `uint32` | 32 bit unsigned integer |
| 0x0F | `uint64` | 64 bit unsigned integer |

## Complex Types

