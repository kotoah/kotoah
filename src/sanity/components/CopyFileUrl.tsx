import React, { useCallback } from 'react'
import { Button, useToast, Card, Text, Flex } from '@sanity/ui'
import { CopyIcon } from '@sanity/icons'
import { useFormValue } from 'sanity'
import { client } from '../../lib/sanity/client'

export const CopyFileUrl = () => {
  const file = useFormValue(['file']) as any
  const title = useFormValue(['title']) as string
  const toast = useToast()

  const copyToClipboard = useCallback(async () => {
    if (!file?.asset?._ref) {
      toast.push({
        title: 'ファイルがアップロードされていません',
        status: 'error',
      })
      return
    }

    try {
      const asset = await client.getDocument(file.asset._ref) as any
      if (asset?.url) {
        // コピーするHTMLタグ（リンク形式）
        const linkText = title || '資料（PDF）を閲覧する'
        const htmlTag = `<a href="${asset.url}" target="_blank" style="color: #16a34a; font-weight: bold; text-decoration: underline;">${linkText}</a>`

        navigator.clipboard.writeText(htmlTag).then(() => {
          toast.push({
            title: 'HTMLリンクをコピーしました！',
            description: 'ブログのHTML入力欄にそのまま貼り付けてください。',
            status: 'success',
          })
        })
      } else {
        throw new Error('URLが見つかりません')
      }
    } catch (err) {
      toast.push({
        title: 'URLの取得に失敗しました',
        description: '一度ファイルをPublishしてからお試しください。',
        status: 'error',
      })
    }
  }, [file, title, toast])

  return (
    <Card padding={3} border radius={2}>
      <Flex align="center" gap={3}>
        <Button
          icon={CopyIcon}
          text="HTMLリンクタグをコピーする"
          tone="primary"
          onClick={copyToClipboard}
        />
        <Text size={1} muted>
          1クリックで「そのまま使えるリンク」をコピーできます
        </Text>
      </Flex>
    </Card>
  )
}
