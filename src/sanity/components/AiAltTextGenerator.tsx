import { Box, Button, Flex, Text } from '@sanity/ui';
import { useCallback, useState } from 'react';
import { set, unset } from 'sanity';
import { SparklesIcon } from '@sanity/icons';

export function AiAltTextGenerator(props: any) {
  const { onChange, value, parent } = props;
  const [loading, setLoading] = useState(false);

  const generateAltText = useCallback(async () => {
    // 親要素から画像アセットを取得（post.tsなどの構造に合わせる）
    const imageAsset = parent?.mainImage?.asset || parent?.image?.asset;
    
    if (!imageAsset?._ref) {
      alert('先に画像をアップロードしてください。');
      return;
    }

    setLoading(true);

    try {
      // 1. SanityのアセットIDからURLを取得する（簡易的な方法）
      // ref: image-7ro28z7ro28z7ro2-1200x800-png
      const [_file, id, size, format] = imageAsset._ref.split('-');
      const imageUrl = `https://cdn.sanity.io/images/zbtswb8v/production/${id}-${size}.${format}`;

      // 2. 自作したAPIを叩く
      const response = await fetch('/api/describe-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageUrl }),
      });

      const data = await response.json();

      if (data.description) {
        // 3. 値をセット
        onChange(set(data.description));
      } else {
        throw new Error('AIからの応答が空でした');
      }
    } catch (err) {
      console.error(err);
      alert('AI説明文の生成に失敗しました。');
    } finally {
      setLoading(false);
    }
  }, [onChange, parent]);

  return (
    <Box>
      <Flex direction="column" gap={3}>
        {props.renderDefault(props)}
        <Button
          fontSize={1}
          padding={3}
          text={loading ? 'AIが画像を解析中...' : 'AIで説明文を自動生成'}
          icon={SparklesIcon}
          tone="primary"
          mode="ghost"
          onClick={generateAltText}
          disabled={loading}
        />
        <Text size={1} muted>
          Google Gemini AIが画像の内容を分析して、SEOに最適な代替テキストを入力します。
        </Text>
      </Flex>
    </Box>
  );
}
