import React, { useCallback } from 'react'
import { Button, useToast, Card, Text, Flex } from '@sanity/ui'
import { CopyIcon } from '@sanity/icons'
import { useFormValue } from 'sanity'
import { client } from '../../lib/sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

export const CopyHtmlTag = () => {
  const image = useFormValue(['image']) as any
  const title = useFormValue(['title']) as string
  const toast = useToast()

  const copyToClipboard = useCallback(() => {
    if (!image?.asset?._ref) {
      toast.push({
        title: '画像がアップロードされていません',
        status: 'error',
      })
      return
    }

    // Sanityの画像URLを生成
    const url = builder.image(image).url()
    
    // コピーするHTMLタグのテンプレート
    const htmlTag = `<img src="${url}" alt="${title || ''}" style="width: 100%; height: auto; border-radius: 20px; margin: 20px 0;">`

    navigator.clipboard.writeText(htmlTag).then(() => {
      toast.push({
        title: 'HTMLタグをコピーしました！',
        description: 'ブログのHTML入力欄に貼り付けてください。',
        status: 'success',
      })
    })
  }, [image, title, toast])

  return (
    <Card padding={3} border radius={2}>
      <Flex align="center" gap={3}>
        <Button
          icon={CopyIcon}
          text="HTMLタグをコピーする"
          tone="primary"
          onClick={copyToClipboard}
        />
        <Text size={1} muted>
          1クリックでURL付きのタグをコピーできます
        </Text>
      </Flex>
    </Card>
  )
}
